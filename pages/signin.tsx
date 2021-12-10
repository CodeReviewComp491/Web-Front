import React, { useState, useRef } from 'react'
import Cookies from 'universal-cookie'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { Form } from 'antd'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactNotification, { store } from 'react-notifications-component'

//components
import Layout from 'components/global/Layout/Layout'
import Navbar from 'components/global/Navbar/Navbar'
import Footer from 'components/global/Footer/Footer'

//css
import * as Styled from 'styles/pages/signin'
import FormItem from 'antd/lib/form/FormItem'

//store
import { setUserAction } from 'store/actions/userActions'
import { GlobalState } from 'store/interfaces'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//config
import paths from 'config/routes'

//hooks
import useNotifications from 'hooks/useNotifications'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

export async function getServerSideProps(ctx: any) {
  const user: UserState = await isUserLogged(ctx)
  if (user.authenticationStatus === AuthenticationStatus.SUCCESS) {
    return {
      redirect: {
        permanent: false,
        destination: paths.home.index,
      },
    };
  }
  return {
    props: {},
  }
}

const SignIn = (): JSX.Element => {
  const dispatch = useDispatch()
  const router = useRouter()
  const notifications = useNotifications()

  const displayIncorrectLoginNotification = (): JSX.Element => {
    return (
      <Styled.IncorrectLogin>
        Incorrect username or password.
      </Styled.IncorrectLogin>
    )
  }

  const onFinish = async (values: any): Promise<void> => {
    try {
      const loginRes = await axios.post(`http://localhost:8080/login`, values)
      console.log(loginRes.data)
      if (loginRes.data === undefined || loginRes.data.token === undefined) {
        notifications.addNotifications(
          'default',
          displayIncorrectLoginNotification(),
        )
        console.log('Login failed. Try again')
        return
      }
      const CRToken = loginRes.data.token
      const cookies = new Cookies()
      cookies.set('CRToken', CRToken, { path: '/' })
      const config = {
        headers: { Authorization: `Bearer ${CRToken}` },
      }
      const infoRes = await axios.get(
        'http://localhost:8080/user/info/me',
        config,
      )
      if ('_id' in infoRes.data) {
        dispatch(
          setUserAction({
            email: infoRes.data.email,
            username: infoRes.data.username,
            authenticationStatus: AuthenticationStatus.SUCCESS,
            token: CRToken,
            role: infoRes.data.role,
          }),
        )
        router.push('/')
      } else {
        notifications.addNotifications(
          'default',
          displayIncorrectLoginNotification(),
        )
        console.log('Login failed. Try again')
        return
      }
    } catch (error) {
      notifications.addNotifications(
        'default',
        displayIncorrectLoginNotification(),
      )
      console.log(error)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    notifications.addNotifications(
      'default',
      displayIncorrectLoginNotification(),
    )
    console.log('Failed', errorInfo)
  }

  return (
    <>
      <Head>
        <title>Code Review | Sign in</title>
      </Head>
      <Layout backgroundColor={'#161C22'}>
        <Navbar />
        <Styled.SignIn>
          <Styled.SignInCenter>
            <Styled.SignInTitle>Sign in</Styled.SignInTitle>
            <Styled.MyForm
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email' }]}
                initialValue={''}
              >
                <Styled.Input placeholder={'Email'} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your password' },
                ]}
                initialValue={''}
              >
                <Styled.Input placeholder={'Password'} type={'password'} />
              </Form.Item>
              <FormItem>
                <Styled.Submit htmlType={'submit'}>Sign In</Styled.Submit>
              </FormItem>
              {/* <Styled.Submit onClick={gitlabLogin}>Sign In with gitlab</Styled.Submit> */}
            </Styled.MyForm>
            <Styled.LoginMessage>
              Don’t have an account?{' '}
              <Link href={'/signup'} passHref>
                <Styled.LoginMessageColor> Sign up</Styled.LoginMessageColor>
              </Link>
            </Styled.LoginMessage>
          </Styled.SignInCenter>
        </Styled.SignIn>
        <Footer />
      </Layout>
    </>
  )
}

export default SignIn
