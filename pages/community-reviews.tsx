import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'

//components
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'

//config
import paths from 'config/routes'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//hooks
import useAuth from 'hooks/useAuth'

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

const communityReviews = ({ user }: Props): JSX.Element => {
  const auth = useAuth()
  const [isMounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    auth.setUser(user)
    setMounted(true)
  }, [])

  if (isMounted === false) return <></>
  return (
    <>
      <Head>
        <title>Code Review | {user.username}</title>
      </Head>
      <DashboardLayout keySelected={2} pageTitle={'/Community Reviews'}>
        toto
      </DashboardLayout>
    </>
  )
}

export default communityReviews
