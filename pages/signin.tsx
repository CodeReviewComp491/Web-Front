import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd'
import axios from 'axios'

//components
import Layout from 'components/global/Layout/Layout'
import Navbar from 'components/global/Navbar/Navbar'
import Footer from 'components/global/Footer/Footer'

//css
import * as Styled from 'styles/pages/signin'
import FormItem from 'antd/lib/form/FormItem'
// import { gitlabLogin } from 'components/global/authentification/gitlabLogin'

const SignIn = (): JSX.Element => {

  const onFinish = (values: any): void => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    console.log('Success', values);
    axios.post(`http://localhost:8080/login`, values)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        axios.get(`http://localhost:8080/gitlab/me`, config)
            .then(res => {
                console.log(res.data)
                location.href = `/profil`
            })
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
                <Styled.Input placeholder={'Email'}/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your password' },
                ]}
                initialValue={''}
              >
                <Styled.Input placeholder={'Password'} type={'password'}/>
              </Form.Item>
              <FormItem>
                <Styled.Submit htmlType={'submit'}>Sign In</Styled.Submit>
              </FormItem>
              {/* <Styled.Submit onClick={gitlabLogin}>Sign In with gitlab</Styled.Submit> */}
            </Styled.MyForm>
            <Styled.LoginMessage>
              Don’t have an account?{' '}
              <Link href={'/signup'}>
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
