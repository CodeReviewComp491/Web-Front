import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'

//components
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'
import Carousel from 'components/pages/index/Dashboard/Carousel/Carousel';
import LatestRequests from 'components/pages/index/Dashboard/LatestRequests/LatestRequests'

//store
import { GlobalState } from 'store/interfaces'

//css
import * as Styled from 'components/pages/index/Dashboard/styles'

const Dashboard = (): JSX.Element => {
  const { user } = useSelector<GlobalState, GlobalState>((state) => state)

  return (
    <>
      <Head>
        <title>Code Review | {user.username}</title>
      </Head>
      <DashboardLayout keySelected={1} pageTitle={'/Dashboard'}>
        <Styled.Content>
          <Carousel/>
          <LatestRequests/>
        </Styled.Content>
      </DashboardLayout>
    </>
  )
}

export default Dashboard
