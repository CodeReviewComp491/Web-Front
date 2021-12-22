import React, { useState, useEffect } from 'react'

//components
import LandingPage from 'components/pages/index/LandingPage/LandingPage'
import Dashboard from 'components/pages/index/Dashboard/Dashboard'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import WithAuthSuccess from 'components/global/WithAuthSuccess/WithAuthSuccess'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

export async function getServerSideProps(ctx: any) {
  const user: UserState = await isUserLogged(ctx)
  return {
    props: {
      user: user,
    },
  }
}

interface Props {
  user: UserState
}

const Home = ({ user }: Props): JSX.Element => {
  return (
    <WithAuthInStore user={user}>
      <WithAuthSuccess renderAuthFail={() => <LandingPage/>}>
        <Dashboard/>
      </WithAuthSuccess>
    </WithAuthInStore>
  )
}

export default Home
