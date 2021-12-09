import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Menu, Dropdown, Button } from 'antd'
import { useRouter } from 'next/dist/client/router'
import Cookies from 'universal-cookie'
import Link from 'next/link';

//config
import paths from 'config/routes'

//common
import { CookieName } from 'common/enum'

//store
import { GlobalState } from 'store/interfaces'
import { setUserAction } from 'store/actions/userActions'
import { initialState } from 'store/reducers/userReducer'

//css
import * as Styled from 'components/global/DashboardLayout/TopBar/styles'

interface Props {
  pageTitle: string
}

const TopBar = ({ pageTitle }: Props): JSX.Element => {
  const { user } = useSelector<GlobalState, GlobalState>((state) => state)
  const dispatch = useDispatch()
  const router = useRouter()

  const Logout = (): void => {
    const cookies = new Cookies()
    cookies.remove(CookieName.CRTOKEN)
    dispatch(setUserAction(initialState))
    router.push(paths.home.signin.index)
  }

  const displayUserDropDown = (): JSX.Element => {
    return (
      <Menu>
        <Menu.Item>
          <Link href={paths.home.profil.index} passHref>Profile</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={paths.home.settings.index} passHref>Settings</Link>
        </Menu.Item>
        <Menu.Item>
          <Styled.AvatarButtonDropdown onClick={Logout}>
            Logout
          </Styled.AvatarButtonDropdown>
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
