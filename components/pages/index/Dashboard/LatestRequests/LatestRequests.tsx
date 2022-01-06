import React, { useEffect } from 'react'

//components
import Review from 'components/pages/community-reviews/Review/Review'

//common
import { Review as ReviewType } from 'common/types'

//css
import * as Styled from 'components/pages/index/Dashboard/LatestRequests/styles'

interface Props {
  reviewsList: Array<ReviewType>
}

const LatestRequests = ({ reviewsList }: Props): JSX.Element => {

  return (
    <>
      <Styled.Title>Latest Requests</Styled.Title>
      <Styled.Requests>
        {reviewsList.map((review: ReviewType, index: number) => {
          return (
            <Styled.Request key={index}>
              <Review review={review} />
            </Styled.Request>
          )
        })}
      </Styled.Requests>
    </>
  )
}

export default LatestRequests
