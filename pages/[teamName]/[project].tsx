import React from 'react'
import Head from 'next/head'

//config
import fakeRequestsList from 'config/fake-requestsList'
import paths from 'config/routes'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//components
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import Dashboard from 'components/pages/[teamName]/[project]/Dashboard/Dashboard'
import Forum from 'components/pages/[teamName]/[project]/Forum/Forum'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//css
import * as Styled from 'styles/pages/[teamName]/[project]'

const fake = fakeRequestsList[0]

export async function getServerSideProps(ctx: any) {
  const user: UserState = await isUserLogged(ctx)
  if (user.authenticationStatus === AuthenticationStatus.FAILED) {
    return {
      redirect: {
        permanent: false,
        destination: paths.home.signin.index,
      },
    };
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

const Project = ({ user }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Code Review | project</title>
      </Head>
      <WithAuthInStore user={user}>
        <DashboardLayout keySelected={0} pageTitle={'/View Review'}>
          <Styled.Content>
            <Dashboard project={fake}/>
            <Forum project={fake}/>
          </Styled.Content>
        </DashboardLayout>
      </WithAuthInStore>
    </>
  )
}

export default Project
