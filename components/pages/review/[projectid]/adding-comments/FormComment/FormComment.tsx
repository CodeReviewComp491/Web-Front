import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-csharp'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-golang'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-tsx'
import 'ace-builds/src-noconflict/mode-rust'
import _ from 'lodash'

//common
import { ReviewCommentFile } from 'common/types'
import { Skills } from 'common/enum'
import { SkillToAceLanguageTranslator } from 'common/utils'

//config
import { getInitialValues } from 'config/reviewCommentFile'

//css
import * as Styled from 'components/pages/review/[projectid]/adding-comments/FormComment/styles'

interface Props {
  language: Skills | null
  isFirst?: boolean
  onChange: (formComment: ReviewCommentFile) => void;
  onClickAddComment: () => void;
  onClickDeleteComment: () => void;
}

interface State {
  formComment: ReviewCommentFile
}

const FormComment = ({
  language,
  isFirst,
  onChange,
  onClickAddComment,
  onClickDeleteComment
}: Props): JSX.Element => {
  const [state, setState] = useState<State>({
    formComment: getInitialValues(),
  })
  const [inputValueLine, setInputValueLine] = useState<string>('')

  /*useEffect(() => {
    onChange(state.formComment);
  }, [state.formComment]);
*/
  /*const getFormValues = (): ReviewCommentFile => {
    return state.formComment
  }*/

  const handleOnChangeLineContentLineInput = (e: any) => {
    if (e.target.value === '') {
      setInputValueLine('')
      const myFormComment: ReviewCommentFile = {...state.formComment};
      myFormComment.line = 1;
      setState({ ...state, formComment: myFormComment })
      onChange(myFormComment);
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
      setInputValueLine(inputValue)
      const myFormComment: ReviewCommentFile = {...state.formComment};
      myFormComment.line = parseInt(inputValue);
      setState({
        ...state,
        formComment: myFormComment,
      })
      onChange(myFormComment);
    }
  }

  const handleLineContentInput = (value: string): void => {
    const myFormComment: ReviewCommentFile = {...state.formComment};
    console.log(value);
    myFormComment.lineContent = value;
    /*setState({
      ...state,
      formComment: myFormComment,
    })*/
    onChange(myFormComment);
  }

  const handleLineSuggestionInput = (value: string): void => {
    const myFormComment: ReviewCommentFile = {...state.formComment};
    myFormComment.lineSuggestion = value;
    setState({
      ...state,
      formComment: myFormComment,
    })
    onChange(myFormComment);
  }

  const handleCommentInput = (e: any): void => {
    const myFormComment: ReviewCommentFile = {...state.formComment};
    myFormComment.comment = e.target.value;
    setState({
      ...state,
      formComment: myFormComment,
    })
    onChange(myFormComment);
  }

  const displayDeleteBox = (): JSX.Element => {
    if (isFirst) return <></>
    return (
      <Styled.FormDeleteComment>
        <Styled.FormDeleteCommentDivider orientation={'center'}>
          <Styled.FormDeleteCommentButton onClick={onClickDeleteComment}>
            Delete the comment below
          </Styled.FormDeleteCommentButton>
        </Styled.FormDeleteCommentDivider>
      </Styled.FormDeleteComment>
    )
  }

  const displayAddAComment = (): JSX.Element => {
    return (
      <Styled.FormAddCommentButton onClick={onClickAddComment}>Add a comment</Styled.FormAddCommentButton>
    )
  }

  const displayLineContent = (): JSX.Element => {
    return (
      <Styled.FormLineContent>
        <Styled.FormLineContentHeader>
          <Styled.FormLineContentTxt>At line:</Styled.FormLineContentTxt>
          <Styled.FormLineContentInput
            placeholder={'line'}
            value={inputValueLine}
            onChange={handleOnChangeLineContentLineInput}
          />
          <Styled.FormLineContentTxt>Line content:</Styled.FormLineContentTxt>
        </Styled.FormLineContentHeader>
        <Styled.FormLineContentAceWrapper>
          <AceEditor
            mode={
              language === null
                ? undefined
                : SkillToAceLanguageTranslator(language)
            }
            fontSize={18}
            setOptions={{ firstLineNumber: state.formComment.line }}
            onChange={(value) => handleLineContentInput(value)}
          />
        </Styled.FormLineContentAceWrapper>
      </Styled.FormLineContent>
    )
  }

  const displayLineSuggestion = (): JSX.Element => {
    return (
      <Styled.FormLineSuggestion>
        <Styled.FormLineSuggestionHeader>
          <Styled.FormLineSuggestionTxt>
            Replace by:
          </Styled.FormLineSuggestionTxt>
        </Styled.FormLineSuggestionHeader>
        <Styled.FormLineSuggestionAceWrapper>
          <AceEditor
            mode={
              language === null
                ? undefined
                : SkillToAceLanguageTranslator(language)
            }
            fontSize={18}
            setOptions={{ firstLineNumber: state.formComment.line }}
            onChange={(value) => handleLineSuggestionInput(value)}
          />
        </Styled.FormLineSuggestionAceWrapper>
      </Styled.FormLineSuggestion>
    )
  }

  const displayCommentInput = (): JSX.Element => {
    return (
      <Styled.FormCommentContentInput
        placeholder={'Add a comment'}
        onChange={handleCommentInput}
        value={state.formComment.comment}
      />
    )
  }

  return (
    <Styled.FormComment>
      {displayDeleteBox()}
      {displayLineContent()}
      {displayLineSuggestion()}
      {displayCommentInput()}
      {displayAddAComment()}
    </Styled.FormComment>
  )
}

export default FormComment
