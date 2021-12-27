import styled from 'styled-components'
import { Form, Input, Button, Select } from 'antd';

export const SkillSelect = styled(Select)`
  width: 140px !important;
  height: 40px;
  float: left;
  margin-right: 15px;
`;

export const Option = styled(Select.Option)`

`;

export const OptionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface OptionIconProps {
  bckImage: string;
}

export const OptionIcon = styled.div`
  background-image: ${(props: OptionIconProps) => `url('${props.bckImage}')`};
  background-position: center;
  background-size: contain;
  width: 24px;
  height: 24px;
`;

export const OptionTitle = styled.span`
  font-size: 12px;
  color: black;
`;