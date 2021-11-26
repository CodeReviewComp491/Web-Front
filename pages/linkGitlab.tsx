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
import { gitlabLogin } from 'components/global/authentification/gitlabLogin'

const linkGitlab = (): JSX.Element => {

  return (
    <>
      <Styled.Submit onClick={gitlabLogin}>Link gitlab</Styled.Submit>
    </>
  )
}

export default linkGitlab
