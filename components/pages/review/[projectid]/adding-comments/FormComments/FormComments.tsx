import React, { useEffect, useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
import _ from 'lodash'

//css
import * as Styled from 'components/pages/review/[projectid]/adding-comments/FormComments/styles'

//common
import {
  ReviewCommentsFile,
  ReviewCommentFile,
  ChildFunction,
} from 'common/types'
import { Skills } from 'common/enum'

//config
import { SkillProps, SkillsProps } from 'config/skills'
import { getInitialValues as getInitialValuesSample } from 'config/reviewCommentsFile'
import { getInitialValues as getInitialValuesCommentSample } from 'config/reviewCommentFile'

//hooks
import useChildFunctions, {
  useChildFunctionsProps,
} from 'hooks/useChildFunctions'

const FormComment = dynamic(
  () => {
    return import(
      'components/pages/review/[projectid]/adding-comments/FormComment/FormComment'
    )
  },
  { ssr: false },
)

interface Props {
  onChange: (newReviewCommentsFile: ReviewCommentsFile) => void
  //triggerChildFunctions: Array<ChildFunction>;
}

interface State {
  reviewCommentsFile: ReviewCommentsFile
}

const FormComments = ({
  onChange,
}: //triggerChildFunctions,
Props): JSX.Element => {
  const [state, setState] = useState<State>({
    reviewCommentsFile: getInitialValuesSample(),
  })

  /*useEffect(() => {
    onChange(state.reviewCommentsFile)
  }, [state.reviewCommentsFile])*/

  /*const getFormValues = (): ReviewCommentsFile => {
    console.log('State =>', state)
    const newReviewCommentsFile = { ...state.reviewCommentsFile }
    //newReviewCommentsFile.feedback[0] = formCommentRef.current.getFormValues();
    return newReviewCommentsFile
  }*/

  /*useEffect(() => {
    for (let i = 0; i !== triggerChildFunctions.length; i += 1) {
      if (triggerChildFunctions[i].isTriggered) {
        if (triggerChildFunctions[i].name === 'getFormValues') {
          return triggerChildFunctions[i].callback(getFormValues());
        }
      }
    }
  }, [triggerChildFunctions]);*/

  const handleOnChangeFormComment = (
    formComment: ReviewCommentFile,
    index: number,
  ) => {
    const myReviewCommentsFile = { ...state.reviewCommentsFile }

    myReviewCommentsFile.feedback[index] = formComment
    //setState({ ...state, reviewCommentsFile: myReviewCommentsFile })
    onChange(myReviewCommentsFile);
  }

  const handleOnChangeFileName = (e: any) => {
    const myReviewCommentsFile: ReviewCommentsFile = {...state.reviewCommentsFile};
    myReviewCommentsFile.fileName = e.target.value;
    onChange(myReviewCommentsFile);
    setState({
      ...state,
      reviewCommentsFile: myReviewCommentsFile
    })
  }

  const handleOnChangeLanguageSelect = (value: Skills) => {
    const myReviewCommentsFile: ReviewCommentsFile = {...state.reviewCommentsFile};
    myReviewCommentsFile.language = value;
    onChange(myReviewCommentsFile);
    setState({
      ...state,
      reviewCommentsFile: myReviewCommentsFile,
    })
  }

  const handleOnClickDeleteComment = (index: number) => {
    const myReviewCommentsFile: ReviewCommentsFile = {...state.reviewCommentsFile};
    myReviewCommentsFile.feedback.splice(index, 1);
    onChange(myReviewCommentsFile);
    setState({...state, reviewCommentsFile: myReviewCommentsFile});
  }

  const handleOnClickAddComment = () => {
    const myReviewCommentsFile: ReviewCommentsFile = {...state.reviewCommentsFile};
    myReviewCommentsFile.feedback.push(getInitialValuesCommentSample());
    onChange(myReviewCommentsFile);
    setState({...state, reviewCommentsFile: myReviewCommentsFile});
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

  const displayFormFile = (): JSX.Element => {
    return (
      <Styled.FileSelector>
        <Styled.FileSelectorContent>
          <Styled.SelectorButton>
            <LeftOutlined style={{ fontSize: '60px' }} />
          </Styled.SelectorButton>
          <Styled.FileIcon />
          <Styled.SelectorButton>
            <RightOutlined style={{ fontSize: '60px' }} />
          </Styled.SelectorButton>
        </Styled.FileSelectorContent>
        <Styled.FileForm>
          <Styled.FileItem
            name="fileName"
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
              defaultValue={state.reviewCommentsFile.fileName}
            />
          </Styled.FileItem>
          <Styled.LanguageItem
            name="language"
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
              defaultValue={
                state.reviewCommentsFile.language === null
                  ? undefined
                  : state.reviewCommentsFile.language
              }
              onChange={(value: any) => handleOnChangeLanguageSelect(value)}
            >
              {displayLanguageOptions()}
            </Styled.LanguageSelect>
          </Styled.LanguageItem>
        </Styled.FileForm>
      </Styled.FileSelector>
    )
  }

  const displayFormComments = (): JSX.Element => {
    return (
      <>
        {state.reviewCommentsFile.feedback.map((feedback, index) => {
          return (
            <FormComment
              isFirst={index === 0 ? true : false}
              language={state.reviewCommentsFile.language}
              onChange={(formComment) => handleOnChangeFormComment(formComment, index)}
              onClickAddComment={handleOnClickAddComment}
              onClickDeleteComment={() => handleOnClickDeleteComment(index)}
              key={feedback._id}
            />
          )
        })}
      </>
    )

    /*return (
      <FormComment
        receivedValues={state.reviewCommentsFile.feedback[0]}
        language={state.reviewCommentsFile.language}
      />
    )*/
  }

  return (
    <>
      {displayFormFile()}
      {displayFormComments()}
    </>
  )
}

export default FormComments
