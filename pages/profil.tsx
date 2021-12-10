import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

//components
import Layout from 'components/global/Layout/Layout'
import SimpleNavbar from 'components/global/SimpleNavbar/SimpleNavbar'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import Footer from 'components/global/Footer/Footer'

//css
import * as Styled from 'styles/pages/signin'
import FormItem from 'antd/lib/form/FormItem'

//hooks
import useAuth from 'hooks/useAuth'
import useNotifications from 'hooks/useNotifications'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//config
import paths from 'config/routes'

//store
import { setUserAction } from 'store/actions/userActions'
import { GlobalState } from 'store/interfaces'

export async function getServerSideProps(ctx: any) {
  const user: UserState = await isUserLogged(ctx)
  if (user.authenticationStatus === AuthenticationStatus.FAILED) {
    return {
      redirect: {
        permanent: false,
        destination: paths.home.signin.index,
      },
    }
  }
  return {
    props: {
      receivedUser: user,
    },
  }
}

// import { gitlabLogin } from 'components/global/authentification/gitlabLogin'

/*function clean(obj: any) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
  return obj
}*/

interface Props {
  receivedUser: UserState
}

const Profile = ({ receivedUser }: Props): JSX.Element => {
  const notifications = useNotifications()
  const dispatch = useDispatch()
  const { user } = useSelector<GlobalState, GlobalState>((state) => state);

  const fetchInfos = async (): Promise<void> => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    }
    try {
      const infoRes = await axios.get(
        'http://localhost:8080/user/info/me',
        config,
      )
      if ('_id' in infoRes.data) {
        dispatch(
          setUserAction({
            _id: infoRes.data._id,
            email: infoRes.data.email,
            username: infoRes.data.username,
            authenticationStatus: AuthenticationStatus.SUCCESS,
            token: user.token,
            role: infoRes.data.role,
          }),
        )
        notifications.addNotifications("success", <>Success</>);

      } else {
        notifications.addNotifications('danger', <>An error occured</>)
        console.log('An error occured')
        return
      }
    } catch (error) {
      notifications.addNotifications('danger', <>An error occured</>)
      console.log(error);
    }
  }

  const onFinish = async (values: any): Promise<void> => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    }
    try {
      const res = await axios.put(
        `http://localhost:8080/user/${user._id}`,
        values,
        config,
      )
      console.log(res.data)
      fetchInfos()
    } catch (error) {
      notifications.addNotifications('danger', <>An error occured</>)
      console.log(error)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo)
    notifications.addNotifications('danger', <>An error occured</>)
  }

  return (
    <WithAuthInStore user={receivedUser}>
      <Head>
        <title>Code Review | Profile</title>
      </Head>
      <Layout backgroundColor={'#161C22'}>
        <SimpleNavbar />
        <Styled.SignIn>
          <Styled.SignInCenter>
            <Styled.SignInTitle>Hello {user.username} !</Styled.SignInTitle>
            <Styled.MyForm
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name={'username'}
                rules={[
                  { required: false, message: 'Please input your email' },
                ]}
                initialValue={''}
              >
                <Styled.Input placeholder={user.username} />
              </Form.Item>
              <Form.Item
                name={'email'}
                rules={[
                  { required: false, message: 'Please input your email' },
                ]}
                initialValue={''}
              >
                <Styled.Input placeholder={user.email} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: false, message: 'Please input your password' },
                ]}
                initialValue={''}
              >
                <Styled.Input placeholder={'********'} type={'password'} />
              </Form.Item>
              <FormItem>
                <Styled.Submit htmlType={'submit'}>
                  Update my profile
                </Styled.Submit>
              </FormItem>
            </Styled.MyForm>
          </Styled.SignInCenter>
        </Styled.SignIn>
        <Footer />
      </Layout>
    </WithAuthInStore>
  )

  // useEffect(() => {
  //   fetchInfos();
  //   return () => console.log('unmounting...');
  // }, [])

  // interface Ime {
  //   username: string,
  //   email: string,
  // }
  // const [me, setMe] = useState(null);

  // const fetchInfos = ((): void => {
  //   if (typeof window !== 'undefined') {
  //     const token = localStorage.getItem('token');
  //     const config = {
  //       headers: { Authorization: `Bearer ${token}` }
  //     };
  //     axios.get(`http://localhost:8080/user/info/me`, config)
  //     .then(res => {
  //       console.log(res.data)
  //       setMe(res.data)
  //     })
  //   }
  // });

  // const onFinish = (values: any): void => {
  //   values = clean(values);
  //   const token = localStorage.getItem('token');
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  //   };
  //   axios.put(`http://localhost:8080/user/${me._id}`, values, config)
  //   .then(res => {
  //     console.log(res.data)
  //     fetchInfos()
  //   })
  // }

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed', errorInfo)
  // }

  // return (
  //   <>
  //     <Head>
  //       <title>Code Review | Profile</title>
  //     </Head>
  //     <Layout backgroundColor={'#161C22'}>
  //       <Navbar />
  //       <Styled.SignIn>
  //         <Styled.SignInCenter>
  //           <Styled.SignInTitle>Hello {me ? me!.username : 'nobody'} !</Styled.SignInTitle>
  //           <Styled.MyForm
  //             name="basic"
  //             onFinish={onFinish}
  //             onFinishFailed={onFinishFailed}
  //             autoComplete="off"
  //           >
  //             <Form.Item
  //               name={'username'}
  //               rules={[{ required: false, message: 'Please input your email' }]}
  //               initialValue={''}
  //             >
  //               <Styled.Input placeholder={me ? me!.username: 'name'}/>
  //             </Form.Item>
  //             <Form.Item
  //               name={'email'}
  //               rules={[{ required: false, message: 'Please input your email' }]}
  //               initialValue={''}
  //             >
  //               <Styled.Input placeholder={me ? me!.email: 'email'}/>
  //             </Form.Item>
  //             <Form.Item
  //               name="password"
  //               rules={[
  //                 { required: false, message: 'Please input your password' },
  //               ]}
  //               initialValue={''}
  //             >
  //               <Styled.Input placeholder={'********'} type={'password'}/>
  //             </Form.Item>
  //             <FormItem>
  //               <Styled.Submit htmlType={'submit'}>Update my profile</Styled.Submit>
  //             </FormItem>
  //           </Styled.MyForm>
  //         </Styled.SignInCenter>
  //       </Styled.SignIn>
  //       <Footer />
  //     </Layout>
  //   </>
  // )

  return <></>
}

export default Profile
