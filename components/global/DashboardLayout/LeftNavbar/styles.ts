import styled from 'styled-components'
import { Menu } from 'antd'

export const LeftNavbar = styled.div`
  width: 300px;
  height: 100%;
  background-color: #3c4b64;
`

export const Title = styled.div`
  width: 100%;
  height: 100px;
  background-color: #303c54;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
`

export const RootMenu = styled(Menu)`
  background: none;
  border-width: 0px;
  border: none;
  overflow: auto;
`

export const Item = styled(Menu.Item)`
  transition: none !important;
  padding: 0px !important;
  width: 100% !important;
  margin-top: 0px !important;
  margin-bottom: 0px !important;

  &:not(.ant-menu-horizontal) {
    background-color: transparent !important;
  }

  &:focus {
    background-color: transparent !important;
  }

  &::after {
    border: none !important;
  }

  &:focus {
    background: none;
  }

  & > span {
  transition: none;
  color: white;
  }

  & > span:hover {
    color: white;
  }
`

interface ItemTitleProps {
  isSelected?: boolean;
}

export const ItemTitle = styled.div`
  width: 100%;
  padding-left: 25px;
  font-size: 15px;
  //background-color: rgba(255, 255, 255, 0.25);
  background-color: ${(props: ItemTitleProps) => props.isSelected ? "rgba(255,255,255,0.25)" : "none"};
`;

export const ItemTitleTxt = styled.span`
  margin-left: 20px !important;
`;

export const SectionTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 15px;
  color: white;
  padding-left: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
