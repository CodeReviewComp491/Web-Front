import React, { useState, useEffect } from 'react'

//components
import LandingPage from 'components/pages/index/LandingPage/LandingPage'
import Dashboard from 'components/pages/index/Dashboard/Dashboard'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//hooks
import useWithAuthInStore from 'hooks/useWithAuthInStore'

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
  const authInStore = useWithAuthInStore(user)

  return (
    <WithAuthInStore
      authInStore={authInStore}
      mustAuthBeSuccess={true}
      renderAuthFail={() => <LandingPage />}
    >
      <Dashboard />
    </WithAuthInStore>
  )
}

export default Home
