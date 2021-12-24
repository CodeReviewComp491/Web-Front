import Reactn, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/router'

//store
import { GlobalState } from 'store/interfaces'

//config
import fakeRequestsList from 'config/fake-requestsList'
import paths from 'config/routes'

//common
import { LastRequest, UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//components
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import WithAuthSuccess from 'components/global/WithAuthSuccess/WithAuthSuccess'
import Dashboard from 'components/pages/[teamName]/[project]/Dashboard/Dashboard'
import Forum from 'components/pages/[teamName]/[project]/Forum/Forum'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'

//css
import * as Styled from 'styles/pages/[teamName]/[project]/[projectid]'

const fake = fakeRequestsList[0]

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
  try {
  } catch (error) {}
  return {
    props: {
      user: user,
    },
  }
}

interface Props {
  user: UserState
}

interface State {
  p: any,
  fetched: boolean
}

const Project = ({ user }: Props): JSX.Element => {
  const [state, setState] = useState<State>({
    p: fakeRequestsList[0],
    fetched: false,
  });
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )
  const router = useRouter();

  const fetch_review = async() => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    }
    console.log(config)
    try {
      const revRes = await axios.get(
        `http://localhost:8080/review/${router.query.projectid}`,
        config,
      )
      console.log(revRes.data);
      setState({
        p: revRes.data,
        fetched: true,
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch_review();
  }, []);

  const display = (): JSX.Element => {
    if (!state.fetched) return <></>
    return (
      <Styled.Content>
        <Dashboard project={state.p} />
        <Forum project={state.p} />
      </Styled.Content>
    )
  }

  return (
    <>
      <Head>
        <title>Code Review | project</title>
      </Head>
      <WithAuthInStore user={user}>
        <WithAuthSuccess>
          <DashboardLayout keySelected={0} pageTitle={'/View Review'}>
            {display()}
          </DashboardLayout>
        </WithAuthSuccess>
      </WithAuthInStore>
    </>
  )
}

export default Project
