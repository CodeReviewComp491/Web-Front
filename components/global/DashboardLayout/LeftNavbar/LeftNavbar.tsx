import React, {useState} from 'react'
import {
  DashboardOutlined,
  DeploymentUnitOutlined,
  CodeOutlined,
  SolutionOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'

//css
import * as Styled from 'components/global/DashboardLayout/LeftNavbar/styles'

const LeftNavbar = (): JSX.Element => {
  const [itemSelected, setSelected] = useState<number>(1);

  const handleOnItemSelected = ({ item, key, keyPath, domEvent }: any): void => {
    setSelected(key);
  }

  return (
    <Styled.LeftNavbar>
      <Styled.Title>Code Review</Styled.Title>
      <Styled.RootMenu mode="inline" onClick={handleOnItemSelected}>
        <Styled.Item key="1">
          <Styled.ItemTitle isSelected={itemSelected == 1 ? true : false}>
            <DashboardOutlined />
            <Styled.ItemTitleTxt>Dashboard</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
        <Styled.SectionTitle>Review</Styled.SectionTitle>
        <Styled.Item key="2">
          <Styled.ItemTitle isSelected={itemSelected == 2 ? true : false}>
            <DeploymentUnitOutlined />
            <Styled.ItemTitleTxt>Community Reviews</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
        <Styled.Item key="3">
          <Styled.ItemTitle isSelected={itemSelected == 3 ? true : false}>
            <SolutionOutlined />
            <Styled.ItemTitleTxt>Your Reviews</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
        <Styled.Item key="4">
          <Styled.ItemTitle isSelected={itemSelected == 4 ? true : false}>
            <CodeOutlined />
            <Styled.ItemTitleTxt>Ask a Review</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
        <Styled.SectionTitle>Admin</Styled.SectionTitle>
        <Styled.Item key="5">
          <Styled.ItemTitle isSelected={itemSelected == 5 ? true : false}>
            <UserOutlined />
            <Styled.ItemTitleTxt>Users</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
        <Styled.Item key="6">
          <Styled.ItemTitle isSelected={itemSelected == 6 ? true : false}>
            <UnorderedListOutlined />
            <Styled.ItemTitleTxt>Reviews</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
      </Styled.RootMenu>
    </Styled.LeftNavbar>
  )
}

export default LeftNavbar
