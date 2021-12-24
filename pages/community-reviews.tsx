import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import axios from 'axios'

//store
import { GlobalState } from 'store/interfaces'

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
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import WithAuthSuccess from 'components/global/WithAuthSuccess/WithAuthSuccess'

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

const CommunityReviews = ({ user }: Props): JSX.Element => {
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )
  const [res, setRes] = useState<any>();

  const fetch_reviews = async() => {
    const config = {
      headers: { Authorization: `Bearer ${storeState.user.token}` },
    }
    try {
      const revRes = await axios.get(
        'http://localhost:8080/review/all',
        config,
      )
      console.log(revRes);
      setRes(revRes.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch_reviews();
  }, []);

  return (
    <WithAuthInStore user={user}>
      <WithAuthSuccess>
        <Head>
          <title>Code Review | {user.username}</title>
        </Head>
        <DashboardLayout keySelected={2} pageTitle={'/Community Reviews'}>
          {JSON.stringify(res)}
        </DashboardLayout>
      </WithAuthSuccess>
    </WithAuthInStore>
  )
}

export default CommunityReviews
