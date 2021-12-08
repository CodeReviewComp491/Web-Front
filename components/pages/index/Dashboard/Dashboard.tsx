import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'

//components
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'

//common
import { UserState } from 'common/types'

//hooks
import useAuth from 'hooks/useAuth'

//store
import { GlobalState } from 'store/interfaces'

const Dashboard = (): JSX.Element => {
  const { user } = useSelector<GlobalState, GlobalState>((state) => state);  


  return (
    <>
      <Head>
        <title>Code Review | {user.username}</title>
      </Head>
      <DashboardLayout keySelected={1}></DashboardLayout>
    </>
  )
}

export default Dashboard
