import React, { useState } from 'react'
import dynamic from 'next/dynamic'

//common
import { UserComments as UserCommentsType } from 'common/types'

//css
import * as Styled from 'components/pages/review/[projectid]/UserComments/styles'

const Ace = dynamic(
  () => {
    return import('components/pages/review/[projectid]/Ace/Ace')
  },
  { ssr: false },
)

interface Props {
  userComments: UserCommentsType
}

interface State {
  fileSelected: number
  feedBackSelected: number
}

const UserComments = ({ userComments }: Props): JSX.Element => {
  const [state, setState] = useState<State>({
    fileSelected: 0,
    feedBackSelected: 0,
  })

  const handleNextCommentFile = () => {
    if (
      state.feedBackSelected + 1 !==
      userComments.comments[state.fileSelected].feedback.length
    ) {
      setState({ ...state, feedBackSelected: state.feedBackSelected + 1 })
    }
  }

  const handlePreviousCommentFile = () => {
    if (state.feedBackSelected - 1 >= 0) {
      setState({ ...state, feedBackSelected: state.feedBackSelected - 1 })
    }
  }

  const displayFiles = (): JSX.Element => {
    return (
      <>
        {userComments.comments.map((userCommentFile, index) => {
          return (
            <Styled.File
              key={index}
              isSelected={index === state.fileSelected}
              onClick={() =>
                setState({ ...state, fileSelected: index, feedBackSelected: 0 })
              }
            >
              <Styled.FileTitle>{userCommentFile.fileName}</Styled.FileTitle>
              <Styled.FileSelectorIcon />
            </Styled.File>
          )
        })}
      </>
    )
  }

  return (
    <Styled.UserComments>
      <Styled.UserCommentsContentCenter>
        <Styled.Files>
          <Styled.FilesHeader>
            <Styled.FilesHeaderIcon />
            <Styled.FilesHeaderTitle>Files</Styled.FilesHeaderTitle>
          </Styled.FilesHeader>
          {displayFiles()}
        </Styled.Files>
        <Styled.Comments>
          <Styled.CommentsHeader>
            <Styled.CommentsHeaderAuthor>
              <Styled.CommentsHeaderAuthorIcon
                bckImage={`https://ui-avatars.com/api/?background=fc032c&color=fff&name=${userComments.owner.username}`}
              />
              <Styled.CommentsHeaderAuthorTitle>
                {userComments.owner.username} commented:
              </Styled.CommentsHeaderAuthorTitle>
            </Styled.CommentsHeaderAuthor>
            <Styled.CommentsHeaderOthers>
              <Styled.CommentsHeaderOthersCommentSelector>
                <Styled.CommentsHeaderOthersCommentSelectorButton
                  onClick={handlePreviousCommentFile}
                >
                  <Styled.CommentsHeaderOthersCommentSelectorLeft />
                </Styled.CommentsHeaderOthersCommentSelectorButton>
                comment {state.feedBackSelected + 1}/
                {userComments.comments[state.fileSelected].feedback.length}
                <Styled.CommentsHeaderOthersCommentSelectorButton
                  onClick={handleNextCommentFile}
                >
                  <Styled.CommentsHeaderOthersCommentSelectorRight />
                </Styled.CommentsHeaderOthersCommentSelectorButton>
              </Styled.CommentsHeaderOthersCommentSelector>
              <Styled.CommentsHeaderOthersDate>
                24/12/2021 10:15 AM
              </Styled.CommentsHeaderOthersDate>
            </Styled.CommentsHeaderOthers>
          </Styled.CommentsHeader>
          <Styled.CommentsAceContent>
            <Styled.CommentsAceWrapper>
              <Ace
                language={userComments.comments[state.fileSelected].language}
                firstLineNumber={
                  userComments.comments[state.fileSelected].feedback[
                    state.feedBackSelected
                  ].line
                }
                value={
                  userComments.comments[state.fileSelected].feedback[
                    state.feedBackSelected
                  ].lineContent
                }
              />
            </Styled.CommentsAceWrapper>
          </Styled.CommentsAceContent>
          <Styled.CommentsAceWrapper>
            <Ace
              language={userComments.comments[state.fileSelected].language}
              firstLineNumber={
                userComments.comments[state.fileSelected].feedback[
                  state.feedBackSelected
                ].line
              }
              value={
                userComments.comments[state.fileSelected].feedback[
                  state.feedBackSelected
                ].lineSuggestion
              }
            />
          </Styled.CommentsAceWrapper>
        </Styled.Comments>
      </Styled.UserCommentsContentCenter>
      <Styled.Comment>
        {
          userComments.comments[state.fileSelected].feedback[
            state.feedBackSelected
          ].comment
        }
      </Styled.Comment>
    </Styled.UserComments>
  )
}

export default UserComments
