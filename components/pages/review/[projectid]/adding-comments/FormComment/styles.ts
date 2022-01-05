import styled from 'styled-components'
import { Input, Button, Divider } from 'antd'
import { NoneColorButton } from 'styles/globals'

export const FormComment = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`

export const FormLineContent = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormLineContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const FormLineContentTxt = styled.span`
  font-size: 24px;
  color: black;
`

export const FormLineContentInput = styled(Input)`
  width: 70px;
  height: 35px;
  border: solid #0091fb 0.5px;
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #8e8e8e;
    font-size: 24px;
  }
  :-ms-input-placeholder {
    color: #8e8e8e;
    font-size: 24px;
  }
`

export const FormLineContentAceWrapper = styled.div`
  margin-top: 10px;
  & > div {
    width: 1200px !important;
    height: 280px !important;
  }
`

export const FormLineSuggestion = styled.div`
  margin-top: 100px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormLineSuggestionHeader = styled(FormLineContentHeader)``

export const FormLineSuggestionTxt = styled(FormLineContentTxt)``

export const FormLineSuggestionAceWrapper = styled(FormLineContentAceWrapper)``

export const FormCommentContentInput = styled(Input.TextArea)`
  margin-top: 100px;
  width: 1200px;
  height: 200px;
  border: solid #0091fb 0.5px;
  font-size: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #8e8e8e;
    font-size: 24px;
  }
  :-ms-input-placeholder {
    color: #8e8e8e;
    font-size: 24px;
  }
`
export const FormAddCommentButton = styled(Button)`
  margin-top: 100px;
  width: 1200px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  background-color: #818ea5;

  &:hover,
  &:focus {
    background-color: #818ea5;
    color: white;
    opacity: 80%;
  }
`

export const FormDeleteComment = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`

export const FormDeleteCommentDivider = styled(Divider)``

export const FormDeleteCommentButton = styled(NoneColorButton)`
  &:hover {
    cursor: pointer;
  }
`
