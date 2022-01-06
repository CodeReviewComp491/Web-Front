import React from 'react';

//components
import UserComments from 'components/pages/review/[projectid]/UserComments/UserComments'

//common
import { UserComments as UserCommentsType } from 'common/types';

//css
import * as Styled from 'components/pages/review/[projectid]/Forum/styles';

interface Props {
  userCommentsList: Array<UserCommentsType>
}

const Forum = ({userCommentsList}: Props): JSX.Element => {
  return (
    <Styled.Forum>
      {userCommentsList.map((userComments, index) => {
        return (
          <UserComments userComments={userComments} key={index}/>
        )
      })}
    </Styled.Forum>
  )
}

export default Forum;