import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Popover } from 'antd'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

//store
import { GlobalState } from 'store/interfaces'

//common
import {
  UserState,
  ReviewCommentsFile,
  Review,
  BackComment,
  UserComments,
  BackCommentExtended,
} from 'common/types'
import { AuthenticationStatus, Skills } from 'common/enum'
import { transformReceivedCommentToParsedComments } from 'common/utils'

//css
import * as Styled from 'styles/pages/review/[projectid]/adding-comments'

//components
import WithAuthInStore from 'components/global/WithAuthInStore/WithAuthInStore'
import DashboardLayout from 'components/global/DashboardLayout/DashboardLayout'

//backend
import { isUserLogged } from 'backend/utils/tokenChecker'
import { getReview } from 'backend/utils/reviewService'

//config
import paths from 'config/routes'
import { getInitialValues } from 'config/reviewCommentsFile'
import { getInitialValues as getInitialValuesComment } from 'config/reviewCommentFile'
import { SkillProps, SkillsProps } from 'config/skills'

//hooks
import useNotifications from 'hooks/useNotifications'
import useWithAuthInStore from 'hooks/useWithAuthInStore'

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
  const userCommentsList: Array<UserComments> = transformReceivedCommentToParsedComments(
    review,
  )

  let userComments: UserComments | null = null

  for (let i = 0; i !== userCommentsList.length; i += 1) {
    if (userCommentsList[i].userId === user._id) {
      userComments = userCommentsList[i]
      break
    }
  }

  return {
    props: {
      user: user,
      review: review,
      userComments: userComments,
    },
  }
}

const Ace = dynamic(
  () => {
    return import('components/pages/review/[projectid]/adding-comments/Ace/Ace')
  },
  { ssr: false },
)

interface Props {
  user: UserState
  review: Review
  userComments: UserComments | null
}

interface State {
  reviewCommentsFileList: Array<ReviewCommentsFile>
  fileSelected: number
  inputValueLineList: Array<string>
}

const addingComments = ({ user, review, userComments }: Props): JSX.Element => {
  const notifications = useNotifications()
  const authInStore = useWithAuthInStore(user)
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )
  const [state, setState] = useState<State>({
    reviewCommentsFileList: [getInitialValues()],
    fileSelected: 0,
    inputValueLineList: [''],
  })

  useEffect(() => {
    console.log(state.reviewCommentsFileList)
  }, [state.reviewCommentsFileList])

  useEffect(() => {
    if (userComments !== null) {
      setState({ ...state, reviewCommentsFileList: userComments.comments })
    }
  }, [])

  const displayFilesList = (): JSX.Element => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    return (
      <Styled.FilesList>
        {myReviewCommentsFileList.map((value, index) => {
          return (
            <Styled.FileInfos key={index}>
              <Styled.TinyFileIcon />
              <Popover placement="top" content={<>{value.fileName}</>}>
                <Styled.FileTitle
                  isSelected={index === state.fileSelected ? true : false}
                  onClick={() => setState({ ...state, fileSelected: index })}
                >
                  {value.fileName === '' ? 'New title' : value.fileName}
                </Styled.FileTitle>
              </Popover>
            </Styled.FileInfos>
          )
        })}
        <Styled.FileListClear />
      </Styled.FilesList>
    )
  }

  const deleteAComment = async (commentId: string): Promise<boolean> => {
    const config = {
      headers: { Authorization: `Bearer ${storeState.user.token}` },
    }
    try {
      const deleteCommentRes = await axios.delete(
        `http://localhost:8080/comment/${commentId}`,
        config,
      )
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const deleteAllExistingComments = async (): Promise<boolean> => {
    const myComments: Array<BackCommentExtended> = []

    for (let i = 0; i !== review.comments.length; i += 1) {
      if (review.comments[i].ownerId === storeState.user._id) {
        myComments.push(review.comments[i])
      }
    }

    let check = true
    for (let i = 0; i !== myComments.length; i += 1) {
      check = await deleteAComment(myComments[i]._id)
      if (check === false) break
    }
    return check
  }

  const sendComment = async (comment: BackComment) => {
    const check = await deleteAllExistingComments()
    if (check == false) {
      notifications.addNotifications('danger', <p>Sending failed</p>)
      return
    }
    const config = {
      headers: { Authorization: `Bearer ${storeState.user.token}` },
    }
    try {
      const reviewRes = await axios.post(
        `http://localhost:8080/comment`,
        comment,
        config,
      )
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnClickSubmit = async () => {
    for (let i = 0; i !== state.reviewCommentsFileList.length; i += 1) {
      if (
        state.reviewCommentsFileList[i].fileName === '' ||
        state.reviewCommentsFileList[i].language === null
      ) {
        notifications.addNotifications(
          'danger',
          <p>Please fill in the file name and type fields</p>,
        )
        return
      }
    }
    for (let i = 0; i !== state.reviewCommentsFileList.length; i += 1) {
      for (
        let j = 0;
        j !== state.reviewCommentsFileList[i].feedback.length;
        j += 1
      ) {
        const newComment: BackComment = {
          comment: state.reviewCommentsFileList[i].feedback[j].comment,
          lineContent: state.reviewCommentsFileList[i].feedback[j].lineContent,
          lineSuggestion:
            state.reviewCommentsFileList[i].feedback[j].lineSuggestion,
          line: `${state.reviewCommentsFileList[i].feedback[j].line}`,
          fileName: state.reviewCommentsFileList[i].fileName,
          language: state.reviewCommentsFileList[i].language as any,
          reviewId: review._id,
        }
        await sendComment(newComment)
      }
    }
    Router.push(paths.home.index)
  }

  const handleOnChangeLanguageSelect = (value: Skills) => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    myReviewCommentsFileList[state.fileSelected].language = value
    setState({ ...state, reviewCommentsFileList: myReviewCommentsFileList })
  }

  const handleOnChangeFileName = (e: any) => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    myReviewCommentsFileList[state.fileSelected].fileName = e.target.value
    setState({ ...state, reviewCommentsFileList: myReviewCommentsFileList })
  }

  const setDefaultValueSelect = () => {
    const l = state.reviewCommentsFileList[state.fileSelected].language

    return l === null ? undefined : l
  }

  const onClickDeleteComment = (index: number): void => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    myReviewCommentsFileList[state.fileSelected].feedback.splice(index, 1)
    const myInputValueLineList = [...state.inputValueLineList]
    myInputValueLineList.splice(index, 1)
    setState({
      ...state,
      inputValueLineList: myInputValueLineList,
      reviewCommentsFileList: myReviewCommentsFileList,
    })
  }

  const handleOnChangeLineContentLineInput = (e: any, index: number) => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    if (e.target.value === '') {
      const myInputValueLineList = [...state.inputValueLineList]
      myInputValueLineList[index] = ''
      myReviewCommentsFileList[state.fileSelected].feedback[index].line = 1
      setState({
        ...state,
        inputValueLineList: myInputValueLineList,
        reviewCommentsFileList: myReviewCommentsFileList,
      })

      return
    }
    const inputValue: string = e.target.value
    let isChecked: boolean = true
    for (let i = 0; i !== inputValue.length; i += 1) {
      if (Number.isInteger(parseInt(inputValue[i])) === false) {
        isChecked = false
        break
      }
    }
    if (isChecked === true) {
      const myInputValueLineList = [...state.inputValueLineList]
      myInputValueLineList[index] = inputValue
      myReviewCommentsFileList[state.fileSelected].feedback[
        index
      ].line = parseInt(inputValue)
      setState({
        ...state,
        inputValueLineList: myInputValueLineList,
        reviewCommentsFileList: myReviewCommentsFileList,
      })
    }
  }

  const handleLineContentInput = (value: string, index: number): void => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    myReviewCommentsFileList[state.fileSelected].feedback[
      index
    ].lineContent = value
    setState({ ...state, reviewCommentsFileList: myReviewCommentsFileList })
  }

  const handleLineSuggestionInput = (value: string, index: number): void => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    myReviewCommentsFileList[state.fileSelected].feedback[
      index
    ].lineSuggestion = value
    setState({ ...state, reviewCommentsFileList: myReviewCommentsFileList })
  }

  const handleCommentInput = (e: any, index: number): void => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    myReviewCommentsFileList[state.fileSelected].feedback[index].comment =
      e.target.value
    setState({ ...state, reviewCommentsFileList: myReviewCommentsFileList })
  }

  const handleOnClickAddComment = () => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    myReviewCommentsFileList[state.fileSelected].feedback.push(
      getInitialValuesComment(),
    )
    const myInputValueLineList = [...state.inputValueLineList]
    myInputValueLineList.push('')
    setState({
      ...state,
      inputValueLineList: myInputValueLineList,
      reviewCommentsFileList: myReviewCommentsFileList,
    })
  }

  const handleOnClickNextFile = () => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    if (myReviewCommentsFileList[state.fileSelected + 1] === undefined) {
      myReviewCommentsFileList.push(getInitialValues())
      setState({
        ...state,
        fileSelected: state.fileSelected + 1,
        reviewCommentsFileList: myReviewCommentsFileList,
        inputValueLineList: [''],
      })
    } else {
      const newInputValueLineList: Array<string> = []
      for (
        let i = 0;
        i !== myReviewCommentsFileList[state.fileSelected + 1].feedback.length;
        i += 1
      ) {
        newInputValueLineList.push(
          `${
            myReviewCommentsFileList[state.fileSelected + 1].feedback[i].line
          }`,
        )
      }
      setState({
        ...state,
        fileSelected: state.fileSelected + 1,
        reviewCommentsFileList: myReviewCommentsFileList,
        inputValueLineList: newInputValueLineList,
      })
    }
  }

  const handleOnClickPreviousFile = () => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    if (state.fileSelected - 1 < 0) {
      return
    }
    if (myReviewCommentsFileList[state.fileSelected - 1] === undefined) return
    const newInputValueLineList = []

    for (
      let i = 0;
      i !== myReviewCommentsFileList[state.fileSelected - 1].feedback.length;
      i += 1
    ) {
      newInputValueLineList.push(
        `${myReviewCommentsFileList[state.fileSelected - 1].feedback[i].line}`,
      )
    }
    setState({
      ...state,
      fileSelected: state.fileSelected - 1,
      inputValueLineList: newInputValueLineList,
    })
  }

  const handleOnClickDeleteFile = () => {
    const myReviewCommentsFileList: Array<ReviewCommentsFile> = [
      ...state.reviewCommentsFileList,
    ]
    myReviewCommentsFileList.splice(state.fileSelected, 1)
    setState({
      ...state,
      reviewCommentsFileList: myReviewCommentsFileList,
      fileSelected: 0,
    })
  }

  const displayAddAComment = (index: number): JSX.Element => {
    if (
      index !==
      state.reviewCommentsFileList[state.fileSelected].feedback.length - 1
    ) {
      return <></>
    }

    return (
      <Styled.FormAddCommentButton onClick={() => handleOnClickAddComment()}>
        Add a comment
      </Styled.FormAddCommentButton>
    )
  }

  const displayCommentInput = (index: number): JSX.Element => {
    return (
      <Styled.FormCommentContentInput
        placeholder={'Add a comment'}
        onChange={(e) => handleCommentInput(e, index)}
        value={
          state.reviewCommentsFileList[state.fileSelected].feedback[index]
            .comment
        }
      />
    )
  }

  const displayLineSuggestion = (index: number): JSX.Element => {
    return (
      <Styled.FormLineSuggestion>
        <Styled.FormLineSuggestionHeader>
          <Styled.FormLineSuggestionTxt>
            Replace by:
          </Styled.FormLineSuggestionTxt>
        </Styled.FormLineSuggestionHeader>
        <Styled.FormLineSuggestionAceWrapper>
          <Ace
            language={state.reviewCommentsFileList[state.fileSelected].language}
            firstLineNumber={
              state.reviewCommentsFileList[state.fileSelected].feedback[index]
                .line
            }
            onChange={(value) => handleLineSuggestionInput(value, index)}
            value={
              state.reviewCommentsFileList[state.fileSelected].feedback[index]
                .lineSuggestion
            }
          />
        </Styled.FormLineSuggestionAceWrapper>
      </Styled.FormLineSuggestion>
    )
  }

  const displayLineContent = (index: number): JSX.Element => {
    return (
      <Styled.FormLineContent>
        <Styled.FormLineContentHeader>
          <Styled.FormLineContentTxt>At line:</Styled.FormLineContentTxt>
          <Styled.FormLineContentInput
            placeholder={'line'}
            value={state.inputValueLineList[index]}
            onChange={(e) => handleOnChangeLineContentLineInput(e, index)}
          />
          <Styled.FormLineContentTxt>Line content:</Styled.FormLineContentTxt>
        </Styled.FormLineContentHeader>
        <Styled.FormLineContentAceWrapper>
          <Ace
            language={state.reviewCommentsFileList[state.fileSelected].language}
            firstLineNumber={
              state.reviewCommentsFileList[state.fileSelected].feedback[index]
                .line
            }
            onChange={(value) => handleLineContentInput(value, index)}
            value={
              state.reviewCommentsFileList[state.fileSelected].feedback[index]
                .lineContent
            }
          />
        </Styled.FormLineContentAceWrapper>
      </Styled.FormLineContent>
    )
  }

  const displayDeleteBox = (index: number): JSX.Element => {
    if (index === 0) return <></>
    return (
      <Styled.FormDeleteComment>
        <Styled.FormDeleteCommentDivider orientation={'center'}>
          <Styled.FormDeleteCommentButton
            onClick={() => onClickDeleteComment(index)}
          >
            Delete the comment below
          </Styled.FormDeleteCommentButton>
        </Styled.FormDeleteCommentDivider>
      </Styled.FormDeleteComment>
    )
  }

  const displayFormComments = (): JSX.Element => {
    return (
      <>
        {state.reviewCommentsFileList[state.fileSelected].feedback.map(
          (value, index) => {
            return (
              <Styled.FormComment key={value._id}>
                {displayDeleteBox(index)}
                {displayLineContent(index)}
                {displayLineSuggestion(index)}
                {displayCommentInput(index)}
                {displayAddAComment(index)}
              </Styled.FormComment>
            )
          },
        )}
      </>
    )
  }

  const displayLanguageOptions = (): JSX.Element => {
    return (
      <>
        {SkillsProps.map((value, index) => {
          if (value.name === Skills.MONGO || value.name === Skills.NODEJS)
            return null
          return (
            <Styled.LanguageOption key={index} value={value.name}>
              <Styled.LanguageOptionContent>
                <Styled.LanguageOptionIcon bckImage={value.iconUrl} />
                <Styled.LanguageOptionTitle>
                  {value.name}
                </Styled.LanguageOptionTitle>
              </Styled.LanguageOptionContent>
            </Styled.LanguageOption>
          )
        })}
      </>
    )
  }

  const displayFormFileInfos = (): JSX.Element => {
    return (
      <Styled.FileSelector>
        <Styled.FileSelectorContent>
          <Styled.SelectorButton onClick={() => handleOnClickPreviousFile()}>
            <LeftOutlined style={{ fontSize: '60px' }} />
          </Styled.SelectorButton>
          <Styled.FileIcon />
          <Styled.SelectorButton onClick={() => handleOnClickNextFile()}>
            <RightOutlined style={{ fontSize: '60px' }} />
          </Styled.SelectorButton>
        </Styled.FileSelectorContent>
        <Styled.FileForm>
          <Styled.FileItem
            rules={[
              {
                required: true,
                message: 'Please input the file name',
              },
            ]}
          >
            <Styled.FileNameInput
              placeholder={'File name'}
              onChange={handleOnChangeFileName}
              value={state.reviewCommentsFileList[state.fileSelected].fileName}
            />
          </Styled.FileItem>
          <Styled.LanguageItem
            rules={[
              {
                required: true,
                message: 'Please input the file name',
              },
            ]}
          >
            <Styled.LanguageSelect
              placeholder="Select a option and change input text above"
              allowClear
              value={setDefaultValueSelect()}
              onChange={(value: any) => handleOnChangeLanguageSelect(value)}
            >
              {displayLanguageOptions()}
            </Styled.LanguageSelect>
          </Styled.LanguageItem>
          <Styled.DeleteFileButton
            disabled={state.fileSelected === 0 ? true : false}
            onClick={handleOnClickDeleteFile}
          >
            Delete
          </Styled.DeleteFileButton>
        </Styled.FileForm>
      </Styled.FileSelector>
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
          <title>Code Review | Adding comments</title>
        </Head>
        <DashboardLayout keySelected={0} pageTitle={'/adding-comments'}>
          <Styled.Navbar>
            <Styled.NavbarContent>
              <Styled.NavbarTitle>Adding comments</Styled.NavbarTitle>
              <Styled.NavbarTools>
                <Link passHref={true} href={review.repoUrl}>
                  <a target="_blank" rel="noreferrer">
                    <Styled.NavbarLink>Go to source code</Styled.NavbarLink>
                  </a>
                </Link>
                <Styled.NavbarSubmit onClick={() => handleOnClickSubmit()}>
                  Submit
                </Styled.NavbarSubmit>
              </Styled.NavbarTools>
            </Styled.NavbarContent>
          </Styled.Navbar>
          {displayFilesList()}
          {displayFormFileInfos()}
          {displayFormComments()}
        </DashboardLayout>
      </WithAuthInStore>
    </>
  )
}

export default addingComments
