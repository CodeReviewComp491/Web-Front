import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, Input, Button, Checkbox, Card } from 'antd'
import axios from 'axios'
import Cards from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//common
import { UserState } from 'common/types';

//components
import Layout from 'components/global/Layout/Layout'
import Navbar from 'components/global/Navbar/Navbar'
import Footer from 'components/global/Footer/Footer'

//css
import * as Styled from 'styles/pages/signin'
import FormItem from 'antd/lib/form/FormItem'

//hooks
import useAuth from 'hooks/useAuth'

export async function getServerSideProps(ctx: any) {
  const user: UserState = await isUserLogged(ctx)
  return {
    props: {
      user: user,
    },
  }
}

interface Props {
  user: UserState;
}

const adminUsers = ({ user }: Props): JSX.Element => {
  const auth = useAuth()
  const [mounted, setMounted] = useState<boolean>(false)
  const [users, setUsers] = useState(null);
  const [open, setOpen] = React.useState(false);
  let openedUser = null;

  const handleOpen = (opened) => {
    openedUser = opened
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  useEffect(() => {
    auth.setUser(user)
    //if (user.role === 'admin')
      fetchUsers()
    setMounted(true)
  }, [])

  const fetchUsers = ():void => {
      const config = {
        headers: { Authorization: `Bearer ${user.token}` }
      };
      axios.get(`http://localhost:8080/user`, config)
      .then(res => {
        console.log(res.data)
        setUsers(res.data)
      })
  }

  if (mounted === false)
    return ( 
    <>
    </> 
    )
  else if (user.role !== 'user')
  //else if (user.role !== 'admin')
    return ( 
    <>
      <h1>Unauthorized</h1>
      <h3>You should be Admin to get access to this page</h3>
    </>
    )
  else
    return (
      <>
        <Head>
          <title>Code Review | Admin users</title>
        </Head>
        <Layout backgroundColor={'#161C22'}>
          <Navbar />
          { users ? users.map((elem, i) => {
              return (
                <Cards style={{ marginBottom: "10px", marginLeft: "25px", marginRight: "25px", cursor: "pointer" }} onClick={handleOpen(elem)}>
                  <CardContent>
                    <Typography variant="h5" >
                      {elem._id}
                    </Typography>
                  </CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <CardContent>
                        <Typography  >
                          {elem.username}
                        </Typography>
                      </CardContent>
                    </Grid>
                    <Grid item xs={4}>
                      <CardContent>
                        <Typography  >
                          {elem.email}
                        </Typography>
                      </CardContent>
                    </Grid>
                    <Grid item xs={4}>
                      <CardContent>
                        <Typography  >
                          {elem.role}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Cards>
              )
            }) : <p>No users found</p>
          }
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <h1>{openedUser}</h1>
            </div>
          </Modal>
          <Footer />
        </Layout>
      </>
    )
}

export default adminUsers
