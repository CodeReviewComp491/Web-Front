import styled from 'styled-components'
import { NoneColorButton } from 'styles/globals'
import { Form, Input, Select } from 'antd'

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

export const SelectorButton = styled(NoneColorButton)``

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
