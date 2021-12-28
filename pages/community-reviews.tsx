import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import axios from 'axios'

//store
import { GlobalState } from 'store/interfaces'

//components
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import Search from 'components/pages/community-reviews/Search/Search'
import Reviews from 'components/pages/community-reviews/Reviews/Reviews'

//config
import paths from 'config/routes'

//common
import { UserState, Review, MyAxiosResponse } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'
import reviewService from 'backend/utils/reviewService'

//hooks
import useAuth from 'hooks/useAuth'
import useWithAuthInStore from 'hooks/useWithAuthInStore'

export async function getServerSideProps(ctx: any) {
  const redirect = {
    redirect: {
      permanent: false,
      destination: paths.home.signin.index,
    },
  };
  const user: UserState = await isUserLogged(ctx)
  if (user.authenticationStatus === AuthenticationStatus.FAILED) {
    return redirect;
  }
  const reviewsList: Array<Review> | undefined = await reviewService.getCommunityReviews(user);
  if (reviewsList === undefined)
    return redirect;
  return {
    props: {
      user: user,
      reviewsList: reviewsList,
    },
  }
}

interface Props {
  user: UserState;
  reviewsList: Array<Review>;
}

const CommunityReviews = ({ user, reviewsList }: Props): JSX.Element => {
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )
  const authInStore = useWithAuthInStore(user)
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    console.log(reviewsList);
  }, []);

  const handleOnChangeSubmit = (searchKey: string) => {
    setSearchInput(searchKey);
  }

  return (
    <WithAuthInStore
      authInStore={authInStore}
      mustAuthBeSuccess={true}
      onAuthFailRedirect={paths.home.signin.index}
    >
      <Head>
        <title>Code Review | Community Reviews</title>
      </Head>
      <DashboardLayout keySelected={2} pageTitle={'/community-reviews'}>
        <Search onSubmit={handleOnChangeSubmit}/>
        <Reviews reviews={reviewsList} searchKey={searchInput}/>
      </DashboardLayout>
    </WithAuthInStore>
  )
}

export default CommunityReviews
