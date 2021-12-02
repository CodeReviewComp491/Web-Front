import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'

//components
import LandingPage from 'components/pages/index/LandingPage/LandingPage'
import Dashboard from 'components/pages/index/Dashboard/Dashboard';

//store
import { AuthenticationStatus } from 'store/reducers/userReducer'
import { GlobalState } from 'store/interfaces'

const Home = (): JSX.Element => {
  const { user }: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )

  if (user.authenticationStatus === AuthenticationStatus.FAILED) {
    return (
      <LandingPage/>
    )
  }

  return <Dashboard user={user}/>
}

export default Home
