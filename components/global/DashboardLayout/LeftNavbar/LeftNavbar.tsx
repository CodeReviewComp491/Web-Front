import React, { useState } from 'react'
import Link from 'next/link'
import {
  DashboardOutlined,
  DeploymentUnitOutlined,
  CodeOutlined,
  SolutionOutlined,
  UserOutlined,
  UnorderedListOutlined,
  CrownOutlined,
} from '@ant-design/icons'

//css
import * as Styled from 'components/global/DashboardLayout/LeftNavbar/styles'

//config
import paths from 'config/routes'

interface Props {
  keySelected: number
}

const LeftNavbar = ({ keySelected }: Props): JSX.Element => {
  return (
    <Styled.LeftNavbar>
      <Styled.Title>Code Review</Styled.Title>
      <Styled.RootMenu mode="inline">
        <Styled.Item key="1">
          <Link href={paths.home.index} passHref>
            <Styled.ItemTitle isSelected={keySelected == 1 ? true : false}>
              <DashboardOutlined />
              <Styled.ItemTitleTxt>Dashboard</Styled.ItemTitleTxt>
            </Styled.ItemTitle>
          </Link>
        </Styled.Item>
        <Styled.SectionTitle>Review</Styled.SectionTitle>
        <Styled.Item key="2">
          <Link href={paths.home.communityReviews.index} passHref>
            <Styled.ItemTitle isSelected={keySelected == 2 ? true : false}>
              <DeploymentUnitOutlined />
              <Styled.ItemTitleTxt>Community Reviews</Styled.ItemTitleTxt>
            </Styled.ItemTitle>
          </Link>
        </Styled.Item>
        <Styled.Item key="3">
          <Styled.ItemTitle isSelected={keySelected == 3 ? true : false}>
            <SolutionOutlined />
            <Styled.ItemTitleTxt>Your Reviews</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
        <Styled.Item key="4">
          <Styled.ItemTitle isSelected={keySelected == 4 ? true : false}>
            <CrownOutlined />
            <Styled.ItemTitleTxt>Your Projects</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
        <Styled.Item key="5">
          <Styled.ItemTitle isSelected={keySelected == 5 ? true : false}>
            <CodeOutlined />
            <Styled.ItemTitleTxt>Ask a Review</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
        <Styled.SectionTitle>Admin</Styled.SectionTitle>
        <Styled.Item key="6">
          <Styled.ItemTitle isSelected={keySelected == 6 ? true : false}>
            <UserOutlined />
            <Styled.ItemTitleTxt>Users</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
        <Styled.Item key="7">
          <Styled.ItemTitle isSelected={keySelected == 7 ? true : false}>
            <UnorderedListOutlined />
            <Styled.ItemTitleTxt>Reviews</Styled.ItemTitleTxt>
          </Styled.ItemTitle>
        </Styled.Item>
      </Styled.RootMenu>
    </Styled.LeftNavbar>
  )
}

export default LeftNavbar
