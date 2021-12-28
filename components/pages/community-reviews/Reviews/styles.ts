import styled from 'styled-components'
import { Menu, Dropdown } from 'antd'

export const Reviews = styled.div`
  width: 100%;
  margin-top: 50px;
`

export const ReviewsNavbar = styled.div`
  width: 100%;
  padding-left: 30px;
  padding-right: 300px;
`

export const ReviewsNavbarContent = styled.div`
  width: 100%;
  border-bottom: solid black 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const NavbarTitle = styled.div`
  font-size: 30px;
`

export const NavbarFilter = styled(Dropdown)`
  &:hover {
    cursor: pointer;
  }
`

export const NavbarFilterTitle = styled.div`
  font-size: 30px;
  margin-right: 15px;
`

export const NavbarFilterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ReviewsContent = styled.div`
  width: 100%;
  background-color: red;
  margin-top: 40px;
  padding-left: 35px;
`;

export const ReviewWrapper = styled.div`
  float: left;
  margin-right: 20px;
  margin-bottom: 30px;
`;