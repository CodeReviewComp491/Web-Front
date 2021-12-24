import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Form, Input, Button, Radio } from 'antd'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//css
import * as Styled from 'styles/pages/[teamName]/[project]/[projectid]/adding-comments'

//components
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import WithAuthSuccess from 'components/global/WithAuthSuccess/WithAuthSuccess'
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//config
import paths from 'config/routes'

//hooks
import useNotifications from 'hooks/useNotifications'

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
      user: user,
    },
  }
}

/*const Ace = dynamic(
  () => {
    return import("components/pages/[teamName]/[project]/adding-comments/Ace/Ace");
  },
  { ssr: false }
);*/

interface Props {
  user: UserState
}

const addingComments = ({ user }: Props): JSX.Element => {
  const router = useRouter()
  const [form] = Form.useForm()
  const notifications = useNotifications()

  const onFinish = async (values: any): Promise<void> => {}

  const displayIncorrectFormNotification = (): JSX.Element => {
    return (
      <Styled.IncorrectFormNotification>
        Incorrect Form. Try again
      </Styled.IncorrectFormNotification>
    )
  }

  const onFinishFailed = (errorInfo: any) => {
    notifications.addNotifications(
      'default',
      displayIncorrectFormNotification(),
    )
    console.log('Failed', errorInfo)
  }

  return (
    <>
      <Head>
        <title>Code Review | adding comments</title>
      </Head>
      <WithAuthInStore user={user}>
        <WithAuthSuccess>
          <DashboardLayout
            keySelected={0}
            pageTitle={`/${router.query.project}/adding-comments`}
          >
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout={'horizontal'}
              form={form}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="File name">
                <Input placeholder="Enter the file name" />
              </Form.Item>
              <Form.Item label="Line number">
                <Input placeholder="Enter the line number" />
              </Form.Item>
              <Form.Item label="Line content">
                <Input placeholder="Enter the line content of the line" />
              </Form.Item>
              <Form.Item label="Line suggestions">
                <Input placeholder="Enter suggestions for this line" />
              </Form.Item>
              <Form.Item label="Comments">
                <Input placeholder="Enter your comments" />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
                <Button type="primary" htmlType={'submit'}>Submit</Button>
              </Form.Item>
            </Form>
          </DashboardLayout>
        </WithAuthSuccess>
      </WithAuthInStore>
    </>
  )
}

export default addingComments
