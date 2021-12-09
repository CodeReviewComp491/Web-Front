import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//components
import LandingPage from 'components/pages/index/LandingPage/LandingPage'
import Dashboard from 'components/pages/index/Dashboard/Dashboard'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//config
import paths from 'config/routes'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//hooks

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
  const display = (): JSX.Element => {
    if (user.authenticationStatus === AuthenticationStatus.FAILED) {
      return <LandingPage />
    } else {
      return <Dashboard />
    }
  }

  return (
    <WithAuthInStore user={user}>
      {display()}
    </WithAuthInStore>
  )
}

export default Home
