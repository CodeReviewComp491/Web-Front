import React from 'react'
import Head from 'next/head'

//components
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'

//store
import { UserState } from 'store/reducers/userReducer'

interface Props {
  user: UserState
}

const Dashboard = ({ user }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Code Review | {user.name}</title>
      </Head>
      <DashboardLayout/>
    </>
  )
}

export default Dashboard;
