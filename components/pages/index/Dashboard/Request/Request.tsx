import React from 'react'
import { Popover } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import Link from 'next/link';

//css
import * as Styled from 'components/pages/index/Dashboard/Request/styles'

//common
import { LastRequest, UserState } from 'common/types'

interface Props {
  lastRequest: LastRequest
}

const Request = ({ lastRequest }: Props): JSX.Element => {
  const displayFullTitle = (): JSX.Element => {
    return (
      <span>
        {lastRequest.teamName} / {lastRequest.name}
      </span>
    )
  }

  return (
    <Styled.Request>
      <Styled.RequestHeader>
        <Popover content={displayFullTitle}>
          <Styled.Title>
            {lastRequest.teamName} /{' '}
            <Link href={`${lastRequest.teamName}/${lastRequest.name}/`} passHref><Styled.ProjectName>{lastRequest.name}</Styled.ProjectName></Link>
          </Styled.Title>
        </Popover>
        <Styled.Stars>
          {lastRequest.stars} <StarOutlined />
        </Styled.Stars>
      </Styled.RequestHeader>
      <Styled.Description>{lastRequest.description}</Styled.Description>
      <Styled.Footer>
        <Styled.Avatars>
          <Styled.Avatar backgroundImage={'/fakeusers/15.jpg'}/>
        </Styled.Avatars>
        <Styled.Contributors>
          15 contributors
        </Styled.Contributors>
      </Styled.Footer>
    </Styled.Request>
  )
}

export default Request
