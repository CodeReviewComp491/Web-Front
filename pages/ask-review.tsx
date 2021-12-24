import React from 'react'
import { Form, Input, Button, Radio } from 'antd'
import axios from 'axios'
import { useSelector } from 'react-redux'

//store
import { GlobalState } from 'store/interfaces'

//hooks
import useNotifications from 'hooks/useNotifications'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//config
import paths from 'config/routes'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import WithAuthSuccess from 'components/global/WithAuthSuccess/WithAuthSuccess'
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'

//css
import * as Styled from 'styles/pages/ask-review'

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

interface Props {
  user: UserState
}

const AskReview = ({ user }: Props): JSX.Element => {
  const [form] = Form.useForm()
  const notifications = useNotifications()
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )

  const onFinish = async (values: any): Promise<void> => {
    console.log(values)
    const newV = {...values, userId: storeState.user._id}
    try {
      const config = {
        headers: { Authorization: `Bearer ${storeState.user.token}` },
      }
      console.log(storeState.user.token);
      const Askres = await axios.post(
        `http://localhost:8080/review`,
        newV,
        config,
      )
    } catch (error) {
      console.log(error)
    }
  }

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
    <WithAuthInStore user={user}>
      <WithAuthSuccess>
        <DashboardLayout keySelected={5} pageTitle={'/ask-review'}>
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
            <Form.Item name="name" label="Name" required>
              <Input placeholder="Enter the name of your project" />
            </Form.Item>
            <Form.Item name="description" label="Description" required>
              <Input placeholder="Enter the description of your project" />
            </Form.Item>
            <Form.Item name="repoUrl" label="Repository URL" required>
              <Input placeholder="Enter the repository url" />
            </Form.Item>
            <Form.Item name="status" label="Status" required>
              <Input placeholder="Enter the status" />
            </Form.Item>
            <Form.Item name="thumbnail" wrapperCol={{ span: 14, offset: 4 }}>
              <Button type="primary" htmlType={'submit'}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </DashboardLayout>
      </WithAuthSuccess>
    </WithAuthInStore>
  )
}

export default AskReview
