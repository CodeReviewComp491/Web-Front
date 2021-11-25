import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { Form } from 'antd'

//components
import Layout from 'components/global/Layout/Layout'
import Navbar from 'components/global/Navbar/Navbar'
import Footer from 'components/global/Footer/Footer'
import { githubLogin } from 'components/global/authentification/githubLogin'

//css
import * as Styled from 'styles/pages/signup'

const SignUp = (): JSX.Element => {
  const onFinish = (values: any): void => {
    console.log('Success', values)
    axios.post(`http://localhost:8080/register`, values)
      .then(res => {
        console.log(res.data);
        window.location.href = "/"
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
              {/* <Styled.NameInputs>
                <Form.Item
                  name="firstName"
                  rules={[
                    { required: true, message: 'Please input your first name' },
                  ]}
                  initialValue={''}
                >
                  <Styled.NameInput placeholder={'First name'} />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[
                    { required: true, message: 'Please input your last name' },
                  ]}
                  initialValue={''}
                >
                  <Styled.NameInput placeholder={'Last name'} />
                </Form.Item>
              </Styled.NameInputs> */}
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
              <Styled.Submit onClick={githubLogin}>Sign up with github</Styled.Submit>
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
