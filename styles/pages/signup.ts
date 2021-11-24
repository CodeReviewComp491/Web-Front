import styled from "styled-components";
import { Form, Button } from 'antd';

export const Signup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 150px;
`;

export const SignupCenter = styled.div`
  width: 1055px;
  height: 1265px;
  padding-top: 125px;
  background-color: #202734;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpTitle = styled.div`
  font-size: 64px;
  color: white;
  font-weight: bold;
`

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const NameInputs = styled.div`
  width: 745px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 70px;
`;

export const NameInput = styled.input`
  width: 295px;
  height: 70px;
  background-color: white;
  border-radius: 10px;
  font-size: 28px;
  padding-left: 15px;
`;

export const MainInput = styled.input`
  width: 745px;
  height: 70px;
  background-color: white;
  border-radius: 10px;
  font-size: 28px;
  padding-left: 15px;
  margin-top: 60px;
`;

export const LoginMessage = styled.div`
  font-size: 24px;
  color: white;
  margin-top: 10px;
`;

export const LoginMessageColor = styled.span`
  font-size: 24px;
  color: #6df69c;

  &:hover {
    cursor: pointer;
  }
`;

export const Submit = styled(Button)`
  width: 670px;
  height: 105px;
  background-color: #6DF69C;
  font-size: 38px;
  color: black;

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
`;

export const TUMessage = styled.div`
  color: white;
  font-size: 14px;
  margin-top: 10px;
`;

export const TUMessageColor = styled.span`
  color: #6df69c;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;