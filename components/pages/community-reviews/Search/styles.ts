import styled from 'styled-components'
import { Input, Button, Form } from 'antd'

export const Search = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchBar = styled(Form)`
  width: 1395px;
  margin-top: 70px;
  display: flex;
  flex-direction: row;

  & > div {
    margin-bottom: 0px;
  }
`

export const SearchInput = styled(Input)`
  width: 1335px;
  height: 60px;
  font-size: 18px;
  border: solid #0091fb 0.5px;
  border-right: none;

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

export const SearchSubmit = styled(Button)`
  width: 60px;
  height: 60px;
  background-color: #0091fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background-color: #0091fb;
  }
`

export const SearchSubmitIcon = styled.div`
  width: 25px;
  height: 25px;
  background-image: url('/global/right-arrow.png');
  background-position: center;
  background-size: contain;
`
