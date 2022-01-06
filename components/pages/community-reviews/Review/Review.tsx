import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Link from 'next/link'

//backend
import { transformReceivedCommentToParsedComments } from 'backend/utils/utils'
import reviewService from 'backend/utils/reviewService'

//config
import paths from 'config/routes'

//store
import { GlobalState } from 'store/interfaces'

//common
import { Review as ReviewType, OtherUser, UserComments } from 'common/types'

//css
import * as Styled from 'components/pages/community-reviews/Review/styles'
import useNotifications from 'hooks/useNotifications'

interface Props {
  review: ReviewType
}

interface FetchOwnerInfos {
  owner: OtherUser
  isFetched: boolean
}

const Review = ({ review }: Props): JSX.Element => {
  const notifications = useNotifications()
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )
  const [ownerReviewInfos, setOwnerReviewInfos] = useState<FetchOwnerInfos>({
    owner: {
      _id: '',
      username: '',
      email: '',
      role: '',
      createdAt: '',
      updatedAt: '',
    },
    isFetched: false,
  });
  const [userCommentsList, setUserCommentsList] = useState<Array<UserComments>>([]);

  const getContributors = async() => {
    const completeReview: ReviewType | undefined = await reviewService.getReview(storeState.user, review._id);
    if (completeReview === undefined)
      return;
    const newUserCommentsList: Array<UserComments> = await transformReceivedCommentToParsedComments(storeState.user, completeReview);
    setUserCommentsList(newUserCommentsList);
  }

  const getUserFromId = async () => {
    const config = {
      headers: { Authorization: `Bearer ${storeState.user.token}` },
    }
    try {
      const ownerRes = await axios.get(
        `http://localhost:8080/user/${review.userId}`,
        config,
      )
      setOwnerReviewInfos({ owner: ownerRes.data, isFetched: true })
    } catch (error) {
      console.log(error)
      notifications.addNotifications(
        'danger',
        <p>Error. Unable to get review info</p>,
      )
    }
  }

  useEffect(() => {
    getUserFromId()
    getContributors();
  }, [])

  const getContributorsNumber = (): number => {
    return 1;
  }

  const displayContributors = (): JSX.Element => {

    return (
      <Styled.Contributors>
        {userCommentsList.map((contributor, index) => {
          return (
            <Styled.Contributor
              key={index}
              bckImage={`https://ui-avatars.com/api/?background=fc032c&color=fff&name=${contributor.owner.username}`}
            />
          )
        })}
      </Styled.Contributors>
    )
  }

  if (!ownerReviewInfos.isFetched) return <></>
  return (
    <Styled.Review>
      <Styled.ReviewHeader>
        <Styled.Logo />
        <Styled.Title>
          <Styled.OwnerTitle>
            {ownerReviewInfos.owner.username} /{' '}
          </Styled.OwnerTitle>
          <Link href={`${paths.home.review.__query[0]}/${review._id}`}>{review.name}</Link>
        </Styled.Title>
      </Styled.ReviewHeader>
      <Styled.ReviewBody>{review.description}</Styled.ReviewBody>
      <Styled.ReviewFooter>
        {displayContributors()}
        <Styled.ContributorsNumberTitle>
          {userCommentsList.length} collaborators
        </Styled.ContributorsNumberTitle>
      </Styled.ReviewFooter>
    </Styled.Review>
  )
}

export default Review
