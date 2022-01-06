import styled from 'styled-components'
import { Button } from 'antd'
import { ClearBoth } from 'styles/globals'
import { NoneColorButton } from 'styles/globals'
import { Form, Input, Select } from 'antd'
import { Divider } from 'antd'

export const IncorrectFormNotification = styled.div`
  color: white;
  background-color: red;
  padding: 10px;
  border-radius: 5px;
`
export const Navbar = styled.div`
  width: 100%;
  //background-color: red;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 300px;
`

export const NavbarContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid black 1px;
  //background-color: blue;
  padding-left: 30px;
`

export const NavbarTitle = styled.span`
  font-size: 36px;
  color: black;
`

export const NavbarTools = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //background-color: magenta;
`

export const NavbarLink = styled.span`
  font-size: 24px;
  color: #469dce;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

export const NavbarSubmit = styled(Button)`
  width: 205px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  background-color: #0091fb;
  border-radius: 10px;
  border: solid black 1px;
  margin-left: 60px;

  &:hover,
  &:focus {
    background-color: #0091fb;
    color: white;
    opacity: 80%;
    border: solid black 1px;
  }
`

export const FilesList = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-left: 20px;
  min-height: 90px;
`

export const FileInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  margin-right: 10px;
  margin-bottom: 10px;
  float: left;
`

export const TinyFileIcon = styled.div`
  background-image: url('/global/documents.png');
  background-position: center;
  background-size: contain;
  width: 50px;
  height: 50px;
`

interface FileTitleProps {
  isSelected: boolean
}

export const FileTitle = styled(NoneColorButton)`
  font-size: 13px;
  color: black;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 10px;
  max-width: 80px;
  text-decoration: ${(props: FileTitleProps) =>
    props.isSelected ? 'underline' : 'none'};

  &:hover {
    cursor: pointer;
  }
`

export const FileListClear = ClearBoth

export const FileSelector = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FileSelectorContent = styled.div`
  width: 880px;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;
`

export const SelectorButton = styled(NoneColorButton)`
  &:hover {
    cursor: pointer;
  }
`

export const FileIcon = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('/global/documents.png');
  background-position: center;
  background-size: contain;
`

export const FileForm = styled(Form)`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-right: 100px;
`

export const FileItem = styled(Form.Item)`
  margin-bottom: 0px;
`

export const FileNameInput = styled(Input)`
  width: 240px;
  height: 55px;
  border: solid #0091fb 0.5px;
  font-size: 24px;

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

export const LanguageItem = styled(Form.Item)`
  margin-left: 35px;
  height: 55px !important;
  margin-bottom: 0px;
`

export const LanguageSelect = styled(Select)`
  width: 140px !important;
  height: 55px !important;

  & > div {
    height: 55px !important;
  }

  & > div > span:nth-child(2) {
    padding-top: 10px !important;
    font-size: 18px;
  }
`

export const LanguageOption = styled(Select.Option)``

export const LanguageOptionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

interface LanguageOptionIconProps {
  bckImage: string
}

export const LanguageOptionIcon = styled.div`
  background-image: ${(props: LanguageOptionIconProps) =>
    `url('${props.bckImage}')`};
  background-position: center;
  background-size: contain;
  width: 33px;
  height: 33px;
`

export const LanguageOptionTitle = styled.span`
  font-size: 15px;
  color: black;
`

export const DeleteFileButton = styled(Button)`
  width: 100px;
  height: 55px;
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e30017;
  margin-left: 30px;

  &:hover,
  &:focus {
    background-color: #e30017;
    color: white;
  }
`

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
