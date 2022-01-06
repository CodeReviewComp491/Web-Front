import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'

//store
import { GlobalState } from 'store/interfaces'

//config
import fakeRequestsList from 'config/fake-requestsList'
import paths from 'config/routes'

//common
import { UserState, UserComments, Review, OtherUser } from 'common/types'
import { AuthenticationStatus } from 'common/enum'
import { transformReceivedCommentToParsedComments } from 'backend/utils/utils'

//components
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import Dashboard from 'components/pages/review/[projectid]/Dashboard/Dashboard'
import Forum from 'components/pages/review/[projectid]/Forum/Forum'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'
import { getReview } from 'backend/utils/reviewService'
import { getUserInfosById } from 'backend/utils/userService'

//css
import * as Styled from 'styles/pages/review/[projectid]'

//hooks
import useNotifications from 'hooks/useNotifications'
import useWithAuthInStore from 'hooks/useWithAuthInStore'

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
  const review: Review | undefined = await getReview(user, ctx.params.projectid)
  if (review === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: paths.home.index,
      },
    }
  }
  const userCommentsList: Array<UserComments> = await transformReceivedCommentToParsedComments(user, review);
  const ownerReviewInfos: OtherUser | undefined = await getUserInfosById(user, review.userId);
  if (ownerReviewInfos === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: paths.home.index,
      },
    }
  }
  return {
    props: {
      user: user,
      review: review,
      userCommentsList: userCommentsList,
      ownerReviewInfos: ownerReviewInfos,
    },
  }
}

interface Props {
  user: UserState
  review: Review
  userCommentsList: Array<UserComments>
  ownerReviewInfos: OtherUser;
}

const Project = ({ user, review, userCommentsList, ownerReviewInfos }: Props): JSX.Element => {
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )
  const notifications = useNotifications()
  const authInStore = useWithAuthInStore(user)

  useEffect(() => {
    console.log(userCommentsList);
    console.log(ownerReviewInfos);
  }, [])

  const display = (): JSX.Element => {
    return (
      <Styled.Content>
        <Dashboard review={review} ownerReviewInfos={ownerReviewInfos} />
        <Forum userCommentsList={userCommentsList} />
      </Styled.Content>
    )
  }

  return (
    <>
      <WithAuthInStore
        authInStore={authInStore}
        mustAuthBeSuccess={true}
        onAuthFailRedirect={paths.home.signin.index}
      >
        <Head>
          <title>Code Review | Project</title>
        </Head>
        <DashboardLayout keySelected={0} pageTitle={`/review/${review.name.toLowerCase()}`}>
          {display()}
        </DashboardLayout>
      </WithAuthInStore>
    </>
  )
}

export default Project
