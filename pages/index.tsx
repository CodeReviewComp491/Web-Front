import React, { useState, useEffect } from 'react'

//components
import LandingPage from 'components/pages/index/LandingPage/LandingPage'
import Dashboard from 'components/pages/index/Dashboard/Dashboard'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'

//common
import { UserState, Review } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'
import reviewService from 'backend/utils/reviewService'

//hooks
import useWithAuthInStore from 'hooks/useWithAuthInStore'

export async function getServerSideProps(ctx: any) {
  const user: UserState = await isUserLogged(ctx)
  if (user.authenticationStatus === AuthenticationStatus.SUCCESS) {
    const reviewsList: Array<Review> | undefined = await reviewService.getCommunityReviews(user);
    return {
      props: {
        user: user,
        reviewsList: reviewsList,
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
  reviewsList: Array<Review> | undefined
}

const Home = ({ user, reviewsList }: Props): JSX.Element => {
  const authInStore = useWithAuthInStore(user)

  const display = (): JSX.Element => {
    if (reviewsList === undefined) {
      return <></>
    }
    return (
      <Dashboard reviewsList={reviewsList}/>
    )
  }

  return (
    <WithAuthInStore
      authInStore={authInStore}
      mustAuthBeSuccess={true}
      renderAuthFail={() => <LandingPage />}
    >
      {display()}
    </WithAuthInStore>
  )
}

export default Home
