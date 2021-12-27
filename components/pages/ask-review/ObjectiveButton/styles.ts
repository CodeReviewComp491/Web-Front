import styled from 'styled-components'
import { Form, Input, Button, Radio, Checkbox } from 'antd'
import { NoneColorButton } from 'styles/globals';

interface MyCheckBoxProps {
  isSelected: boolean;
}

export const MyCheckBox = styled(NoneColorButton)`
  height: 30px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props: MyCheckBoxProps) => props.isSelected ? 'white' : 'black'};
  background-color: ${(props: MyCheckBoxProps) => props.isSelected ? '#0091FB' : 'white'};
  transition: color 0.3s, background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
  border: solid #0091fb 0.5px;

  &:hover {
    cursor: pointer;
  }
`;