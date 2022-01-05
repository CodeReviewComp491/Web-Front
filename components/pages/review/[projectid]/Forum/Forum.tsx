import React from 'react';

//common
import { LastRequest } from 'common/types';

//css
import * as Styled from 'components/pages/review/[projectid]/Forum/styles';

interface Props {
  project: LastRequest;
}

const Forum = ({project}: Props): JSX.Element => {
  return (
    <Styled.Forum>
      <Styled.NoCommentsTitle>No comments found</Styled.NoCommentsTitle>
    </Styled.Forum>
  )
}

export default Forum;