import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd'
import axios from 'axios'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//common
import { UserState } from 'common/types';

//components
import Layout from 'components/global/Layout/Layout'
import Navbar from 'components/global/Navbar/Navbar'
import Footer from 'components/global/Footer/Footer'
import userCard from 'components/pages/Admin/userCard'

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
    console.log('ici', users)
    return (
      <>
        <Head>
          <title>Code Review | Admin users</title>
        </Head>
        <Layout backgroundColor={'#161C22'}>
          <Navbar />
          <div> { users ? users.map((element, i) => {
            <userCard 
              key={i}
              name={users[i].username}
              email={users[i].email}
              role={users[i].role}
              id={users[i].id} />
          }) : <p>Aucun user</p> }
          </div>
          <Footer />
        </Layout>
      </>
    )
}

export default adminUsers
