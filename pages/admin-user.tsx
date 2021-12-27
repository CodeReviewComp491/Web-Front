import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Cards from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//css
import * as Styled from 'styles/pages/signin'

//config
import paths from 'config/routes'

//components
import Layout from 'components/global/Layout/Layout'
import Navbar from 'components/global/Navbar/Navbar'
import Footer from 'components/global/Footer/Footer'

//hooks
import useAuth from 'hooks/useAuth'
import useNotifications from 'hooks/useNotifications'
import {Form} from "antd";
import FormItem from "antd/lib/form/FormItem";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 750,
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 10
};

export async function getServerSideProps(ctx: any) {
  const user: UserState = await isUserLogged(ctx);
  if (user.authenticationStatus === AuthenticationStatus.FAILED) {
    return {
      redirect: {
        permanent: false,
        destination: paths.home.signin.index,
      },
    };
  }
  return {
    props: {
      user: user,
    },
  }
}

interface Props {
  user: UserState
}

const AdminUser = ({ user }: Props): JSX.Element => {
  const notifications = useNotifications()
  const auth = useAuth()
  const [mounted, setMounted] = useState<boolean>(false)
  const [users, setUsers] = useState<any>(null)
  const [open, setOpen] = React.useState(false)
  const [openedUser, setOpenedUser] = useState<any>();

  const handleOpen = (opened: any) => {
    setOpenedUser(opened)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const fetchUsers = async (): Promise<void> => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    }
    try {
      const res = await axios.get(`http://localhost:8080/user`, config)
      console.log(res.data)
      setUsers(res.data)
    } catch (error) {
      console.log('Unable to connect to http://localhost:8080/user', error)
    }
  }

  const deleteUser = async () => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    }
    try {
      const res = await axios.delete(
          `http://localhost:8080/user/${openedUser._id}`,
          config,
      )
      console.log(res.data)
      await fetchUsers()
      handleClose()
    } catch (error) {
      notifications.addNotifications('danger', <>An error occured</>)
      console.log(error)
    }
  }

  const onFinish = async (values: any): Promise<void> => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    }
    try {
      const res = await axios.put(
          `http://localhost:8080/user/${openedUser._id}`,
          values,
          config,
      )
      console.log(res.data)
      await fetchUsers()
      handleClose()
    } catch (error) {
      notifications.addNotifications('danger', <>An error occured</>)
      console.log(error)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo)
    notifications.addNotifications('danger', <>An error occured</>)
  }

  useEffect(() => {

    auth.setUser({...user, isInit: true})
    if (user.role === 'admin')
      fetchUsers()
    setMounted(true)
  }, []);


  if (mounted === false) return <></>
  if (user.role !== 'admin') {
    return (
      <>
        <h1>Unauthorized</h1>
        <h3>You should be Admin to get access to this page</h3>
      </>
    )
  } else if (user.role === 'admin')
    return (
    <>
      <Head>
        <title>Code Review | Admin users</title>
      </Head>
      <Layout backgroundColor={'#161C22'}>
        <Navbar />
        {users !== null ? (
          users.map((elem: any, i: number) => {
            return (
              <Cards
                style={{
                  marginBottom: '10px',
                  marginLeft: '25px',
                  marginRight: '25px',
                  cursor: 'pointer',
                }}
                onClick={() => handleOpen(elem)}
                key={i}
              >
                <CardContent>
                  <Typography variant="h5">{elem._id}</Typography>
                </CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <CardContent>
                      <Typography>{elem.username}</Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={4}>
                    <CardContent>
                      <Typography>{elem.email}</Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={4}>
                    <CardContent>
                      <Typography>{elem.role}</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Cards>
            )
          })
        ) : (
          <p>No users found</p>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Styled.MyForm
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
              <Form.Item
                  name="username"
                  rules={[
                    { required: false, message: 'Please input your username' },
                  ]}
                  initialValue={openedUser.username}
              >
                <Styled.Input placeholder={'Username'} />
              </Form.Item>
              <Form.Item
                  name="email"
                  rules={[{ required: false, message: 'Please input your email' }]}
                  initialValue={openedUser.email}
              >
                <Styled.Input placeholder={'Email'} />
              </Form.Item>
              <Form.Item
                  name="role"
                  rules={[{ required: false, message: 'Please input your role' }]}
                  initialValue={openedUser.role}
              >
                <Styled.Input placeholder={'Role'} />
              </Form.Item>
              <FormItem>
                <Styled.Submit htmlType={'submit'}>Update user</Styled.Submit>
              </FormItem>
            </Styled.MyForm>
            <div style={{justifyContent: "center"}}>
              <Styled.SubmitRed onClick={deleteUser}>Delete user</Styled.SubmitRed>
            </div>
          </Box>
        </Modal>
        <Footer />
      </Layout>
    </>
  )
}

export default AdminUser;
