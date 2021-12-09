import React from 'react'
import { useSelector } from 'react-redux'
import { Menu, Dropdown, Button } from 'antd'

//store
import { GlobalState } from 'store/interfaces'

//css
import * as Styled from 'components/global/DashboardLayout/TopBar/styles'

interface Props {
  pageTitle: string
}

const TopBar = ({ pageTitle }: Props): JSX.Element => {
  const { user } = useSelector<GlobalState, GlobalState>((state) => state)

  const displayUserDropDown = (): JSX.Element => {
    return (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    )
  }

  return (
    <Styled.TopBar>
      <Styled.TopBarCenter>
        <Styled.PageTitle>{pageTitle}</Styled.PageTitle>
        <Dropdown overlay={displayUserDropDown()} placement="bottomLeft" arrow>
          <Styled.Avatar
            backgroundImage={`https://ui-avatars.com/api/?background=fc032c&color=fff&name=${user.username}`}
          />
        </Dropdown>
      </Styled.TopBarCenter>
    </Styled.TopBar>
  )
}

export default TopBar
