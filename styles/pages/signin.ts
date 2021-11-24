import styled from 'styled-components'
import { Button, Form } from 'antd'

export const SignIn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 150px;
`

export const SignInCenter = styled.div`
  padding-top: 125px;
  padding-bottom: 40px;
  width: 1055px;
  background-color: #202734;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SignInTitle = styled.div`
  font-size: 64px;
  color: white;
  font-weight: bold;
`

export const Input = styled.input`
  margin-top: 40px;
  width: 480px;
  height: 70px;
  background-color: white;
  border-radius: 10px;
  font-size: 28px;
  padding-left: 15px;
`

export const Submit = styled(Button)`
  width: 370px;
  height: 80px;
  margin-top: 30px;
  background-color: #6df69c;
  font-size: 38px;
  color: black;
  border-color: #6df69c;

  &:hover {
    background-color: #6df69c;
    color: black;
    border-color: #6df69c;
  }

  &:focus {
    background-color: #6df69c;
    color: black;
    border-color: #6df69c;
  }
`

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginMessage = styled.div`
  font-size: 24px;
  color: white;
  margin-top: 10px;
`

export const LoginMessageColor = styled.span`
  font-size: 24px;
  color: #6df69c;

  &:hover {
    cursor: pointer;
  }
`
