import React, { useState } from 'react'
import { Form, Input, Button, Radio } from 'antd'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Head from 'next/head'

//store
import { GlobalState } from 'store/interfaces'

//hooks
import useNotifications from 'hooks/useNotifications'
import useWithAuthInStore from 'hooks/useWithAuthInStore'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus, Skills, Objectives as ObjectivesEnum } from 'common/enum'

//config
import paths from 'config/routes'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//components
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'
import ObjectiveButtons, {
  Objectives,
} from 'components/pages/ask-review/ObjectiveButtons/ObjectiveButtons'
import SkillsSelectors from 'components/pages/ask-review/SkillsSelectors/SkillsSelectors'

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
  const notifications = useNotifications()
  const authInStore = useWithAuthInStore(user)
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )
  const [form] = Form.useForm()

  const onFinish = async (values: any): Promise<void> => {
    console.log(values)
    const newV = { ...values, userId: storeState.user._id, status: 'pending' }
    try {
      const config = {
        headers: { Authorization: `Bearer ${storeState.user.token}` },
      }
      console.log(storeState.user.token)
      const Askres = await axios.post(
        `http://localhost:8080/review`,
        newV,
        config,
      )
      notifications.addNotifications('success', <p>Your project is successfully submited!</p>)
    } catch (error) {
      console.log(error);
      notifications.addNotifications('danger', <p>Error. Try again</p>);
    }
  }

  const onChangeObjectives = (objectives: Objectives) => {
    const objectivesList: Array<string> = []
    if (objectives.security) objectivesList.push(ObjectivesEnum.SECURITY)
    if (objectives.bestPractice) objectivesList.push(ObjectivesEnum.BESTPRACTICE)
    if (objectives.optimization) objectivesList.push(ObjectivesEnum.OPTIMIZATION)
    form.setFieldsValue({ objectives: objectivesList })
  }

  const onChangeSkills = (skills: Array<Skills>) => {
    form.setFieldsValue({ skillsNeeded: skills })
  }

  return (
    <WithAuthInStore
      authInStore={authInStore}
      mustAuthBeSuccess={true}
      onAuthFailRedirect={paths.home.signin.index}
    >
      <Head>
        <title>Code Review | Ask a review</title>
      </Head>
      <DashboardLayout keySelected={5} pageTitle={'/ask-review'}>
        <Styled.FormCenter
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          onFinish={(values) => onFinish(values)}
          form={form}
        >
          <Styled.FormContent>
            <Styled.LogoCenter>
              <Styled.Logo bckImage={'/global/project-icon.png'} />
            </Styled.LogoCenter>
            <Styled.InputsItems>
              <Styled.NameItem
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your project's name",
                  },
                ]}
              >
                <Styled.NameInput
                  placeholder={'Please enter the name of your project'}
                />
              </Styled.NameItem>
              <Styled.DescriptionItem
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input your project's description",
                  },
                ]}
              >
                <Styled.DescriptionTextArea
                  placeholder={'Please enter the description of your project'}
                />
              </Styled.DescriptionItem>
              <Styled.RepoURLItem
                label="Repository URL"
                name="repoUrl"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your repository url',
                  },
                ]}
              >
                <Styled.RepoURLInputBar>
                  <Styled.RepoURLInput
                    placeholder={'Please enter your repository url'}
                  />
                  <Styled.RepoURLWebsiteBar>
                    <Styled.WebsiteIcon
                      bckImage={'/global/github.png'}
                    />
                    <Styled.WebsiteIcon
                      bckImage={'/global/gitlab.png'}
                    />
                  </Styled.RepoURLWebsiteBar>
                </Styled.RepoURLInputBar>
              </Styled.RepoURLItem>
              <Styled.ObjectivesItem label="Objectives" name="objectives">
                <Styled.ObjectivesCenter>
                  <Styled.ObjectivesGroup>
                    <ObjectiveButtons onChange={onChangeObjectives} />
                  </Styled.ObjectivesGroup>
                </Styled.ObjectivesCenter>
              </Styled.ObjectivesItem>
              <Styled.SkillsItem
                label="Skills"
                name="skillsNeeded"
                rules={[
                  {
                    required: true,
                    message: 'Please select required skills',
                  },
                ]}
              >
                <Styled.SkillsCenter>
                  <SkillsSelectors onChange={onChangeSkills} />
                </Styled.SkillsCenter>
              </Styled.SkillsItem>
              <Styled.Submit htmlType={'submit'}>Submit</Styled.Submit>
            </Styled.InputsItems>
          </Styled.FormContent>
        </Styled.FormCenter>
      </DashboardLayout>
    </WithAuthInStore>
  )
}

export default AskReview
