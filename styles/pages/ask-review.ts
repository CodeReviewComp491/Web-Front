import styled from 'styled-components'
import { Form, Input, Button, Radio, Checkbox } from 'antd'
import { NoneColorButton } from 'styles/globals'

export const IncorrectFormNotification = styled.div`
  color: white;
  background-color: red;
  padding: 10px;
  border-radius: 5px;
`

export const FormCenter = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`

export const FormContent = styled.div`
  //background-color: blue;
  margin-right: 200px;
`

export interface LogoProps {
  bckImage: string
}

export const LogoCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 75px;
  margin-left: 70px;
`

export const Logo = styled.div`
  width: 180px;
  height: 180px;
  background-image: ${(props: LogoProps) => `url('${props.bckImage}')`};
  background-position: center;
  background-size: contain;
`

export const InputsItems = styled.div`
  margin-top: 40px;
  //background-color: green;
  display: flex;
  flex-direction: column;
  align-items: end;
`

export const NameItem = styled(Form.Item)`
  & > div {
    flex: none;
  }

  & > div > label {
    font-size: 18px;
  }
`

export const NameInput = styled(Input)`
  width: 512px;
  height: 40px;
  border: solid #0091fb 0.5px;
  font-size: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #8e8e8e;
    font-size: 18px;
  }
  :-ms-input-placeholder {
    color: #8e8e8e;
    font-size: 18px;
  }
`

export const DescriptionItem = styled(Form.Item)`
  margin: 0px;
  margin-top: 40px;

  & > div {
    flex: none;
  }

  & > div > label {
    font-size: 18px;
  }

  & > div:nth-child(2) {
    max-width: none;
  }
`

export const DescriptionTextArea = styled(Input.TextArea)`
  width: 512px;
  height: 165px !important;
  border: solid #0091fb 0.5px;
  font-size: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #8e8e8e;
    font-size: 18px;
  }
  :-ms-input-placeholder {
    color: #8e8e8e;
    font-size: 18px;
  }
`

export const RepoURLItem = styled(Form.Item)`
  margin: 0px;
  margin-top: 40px;

  & > div {
    flex: none;
  }

  & > div > label {
    font-size: 18px;
  }

  & > div:nth-child(2) {
    max-width: none;
  }
`

export const RepoURLInputBar = styled.div`
  display: flex;
  flex-direction: row;
  border: solid #0091fb 0.5px;
`

export const RepoURLInput = styled(Input)`
  width: 433px;
  height: 40px;
  border-right-width: 0px;
  font-size: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #8e8e8e;
    font-size: 18px;
  }
  :-ms-input-placeholder {
    color: #8e8e8e;
    font-size: 18px;
  }
`

export const RepoURLWebsiteBar = styled.div`
  width: 80px;
  height: 40px;
  background-color: #cfcfcf;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`

interface WebsiteIconProps {
  bckImage: string
}

export const WebsiteIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: ${(props: WebsiteIconProps) => `url('${props.bckImage}')`};
  background-position: center;
  background-size: contain;
`

export const ObjectivesItem = styled(Form.Item)`
  margin: 0px;
  margin-top: 40px;

  & > div {
    flex: none;
  }

  & > div > label {
    font-size: 18px;
  }

  & > div:nth-child(2) {
    max-width: none;
  }
`

export const ObjectivesCenter = styled.div`
  width: 513px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ObjectivesGroup = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SkillsItem = styled(Form.Item)`
  margin: 0px;
  margin-top: 40px;

  & > div {
    flex: none;
  }

  & > div > label {
    font-size: 18px;
  }

  & > div:nth-child(2) {
    max-width: none;
  }
`

export const SkillsCenter = styled.div`
  width: 513px;
  background-color: red;
`

export const Submit = styled(Button)`
  width: 513px;
  height: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  background-color: #0091fb;

  &:hover,
  &:focus {
    background-color: #0091fb;
    color: white;
  }
`
