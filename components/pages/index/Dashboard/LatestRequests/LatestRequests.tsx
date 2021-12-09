import React from 'react'

//components
import Request from 'components/pages/index/Dashboard/Request/Request'

//config
import fakeRequestsList from 'config/fake-requestsList'

//common
import { LastRequest } from 'common/types';

//css
import * as Styled from 'components/pages/index/Dashboard/LatestRequests/styles'

const LatestRequests = (): JSX.Element => {
  return (
    <>
      <Styled.Title>Latest Requests</Styled.Title>
      <Styled.Requests>
        {fakeRequestsList.map((lastRequest: LastRequest, index: number) => {
          return <Request lastRequest={lastRequest} key={index}/>
        })}
      </Styled.Requests>
    </>
  )
}

export default LatestRequests
