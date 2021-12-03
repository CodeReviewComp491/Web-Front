import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { Form } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

//components
import Layout from 'components/global/Layout/Layout'
import Navbar from 'components/global/Navbar/Navbar'
import Footer from 'components/global/Footer/Footer'

//css
import * as Styled from 'styles/pages/signup'


//store
import { setUserAction } from 'store/actions/userActions';
import { UserState, AuthenticationStatus } from 'store/reducers/userReducer';
import { GlobalState } from 'store/interfaces';

const SignUp = (): JSX.Element => {
  const { user }: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state
  );
  const dispatch = useDispatch();

  const onFinish = (values: any): void => {
    console.log('Success', values);
    dispatch(setUserAction({...user, authenticationStatus: AuthenticationStatus.SUCCESS}));
    axios.post(`http://localhost:8080/register`, values)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        window.location.href = "/linkGitlab"
      })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo)
  }

  return (
    <>
      <Head>
        <title>Code Review | Sign in</title>
      </Head>
      <Layout backgroundColor={'#161C22'}>
        <Navbar />
        <Styled.Signup>
          <Styled.SignupCenter>
            <Styled.SignUpTitle>Sign up</Styled.SignUpTitle>
            <Styled.MyForm
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: 'Please input your username' },
                ]}
                initialValue={''}
              >
                <Styled.MainInput placeholder={'Username'} />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email' }]}
                initialValue={''}
              >
                <Styled.MainInput placeholder={'E-mail'} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your password' },
                ]}
                initialValue={''}
              >
                <Styled.MainInput placeholder={'Password'} type={'password'} />
              </Form.Item>
              <Form.Item>
                <Styled.LoginMessage>
                  Already have login and password?
                  <Link href={'/signin'}>
                    <Styled.LoginMessageColor>
                      {' '}
                      Sign in
                    </Styled.LoginMessageColor>
                  </Link>
                </Styled.LoginMessage>
              </Form.Item>
              <Form.Item>
                <Styled.Submit htmlType={'submit'}>Sign up</Styled.Submit>
              </Form.Item>
              {/* <Styled.Submit onClick={gitlabLogin}>Sign up with gitlab</Styled.Submit> */}
            </Styled.MyForm>
            <Styled.TUMessage>
              By clicking Register, I agree that I have read and accepted{' '}
              <Styled.TUMessageColor>
                the Code Review Terms of Use and Privacy Policy
              </Styled.TUMessageColor>
            </Styled.TUMessage>
          </Styled.SignupCenter>
        </Styled.Signup>
        <Footer />
      </Layout>
    </>
  )
}

export default SignUp
