import React, {useState, useEffect} from 'react'
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

function clean(obj: any) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
  return obj
}

const Profile = (): JSX.Element => {

  useEffect(() => {
    fetchInfos();
    return () => console.log('unmounting...');
  }, [])


  interface Ime {
    username: string,
    email: string,
  }
  const [me, setMe] = useState(null);

  const fetchInfos = ((): void => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      axios.get(`http://localhost:8080/user/info/me`, config)
      .then(res => {
        console.log(res.data)
        setMe(res.data)
      })
    }
  });

  const onFinish = (values: any): void => {
    values = clean(values);
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.put(`http://localhost:8080/user/${me._id}`, values, config)
    .then(res => {
      console.log(res.data)
      fetchInfos()
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo)
  }

  return (
    <>
      <Head>
        <title>Code Review | Profile</title>
      </Head>
      <Layout backgroundColor={'#161C22'}>
        <Navbar />
        <Styled.SignIn>
          <Styled.SignInCenter>
            <Styled.SignInTitle>Hello {me ? me!.username : 'nobody'} !</Styled.SignInTitle>
            <Styled.MyForm
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name={'username'}
                rules={[{ required: false, message: 'Please input your email' }]}
                initialValue={''}
              >
                <Styled.Input placeholder={me ? me!.username: 'name'}/>
              </Form.Item>
              <Form.Item
                name={'email'}
                rules={[{ required: false, message: 'Please input your email' }]}
                initialValue={''}
              >
                <Styled.Input placeholder={me ? me!.email: 'email'}/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: false, message: 'Please input your password' },
                ]}
                initialValue={''}
              >
                <Styled.Input placeholder={'********'} type={'password'}/>
              </Form.Item>
              <FormItem>
                <Styled.Submit htmlType={'submit'}>Update my profile</Styled.Submit>
              </FormItem>
            </Styled.MyForm>
          </Styled.SignInCenter>
        </Styled.SignIn>
        <Footer />
      </Layout>
    </>
  )
}

export default Profile
