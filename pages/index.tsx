import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//components
import LandingPage from 'components/pages/index/LandingPage/LandingPage'
import Dashboard from 'components/pages/index/Dashboard/Dashboard'

//store
import { GlobalState } from 'store/interfaces'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//config
import paths from 'config/routes'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//hooks
import useAuth from 'hooks/useAuth'

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
  const auth = useAuth()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    auth.setUser(user)
    setMounted(true)
  }, [])

  if (mounted !== true) {
    return <></>
  }
  if (user.authenticationStatus === AuthenticationStatus.FAILED) {
    return <LandingPage />
  } else {
    return <Dashboard />
  }
}

export default Home
