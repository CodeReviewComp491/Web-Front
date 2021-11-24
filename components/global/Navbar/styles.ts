import styled from 'styled-components'

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: #121212;
  overflow: auto;
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 0 auto;
  padding-left: 300px;
`

interface TitleContentProps {
  color?: string
}

export const TitleContent = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 42px;
  color: ${(props: TitleContentProps) => props.color};

  &:hover {
    cursor: pointer;
  }
`

export const NavBarLinks = styled.div`
  float: right;
  margin-right: 70px;
`

interface NavBarLinkText {
  last?: boolean
}

export const NavBarLinkText = styled.span`
  float: left;
  padding-right: ${(props: NavBarLinkText) => (props.last ? '' : '30px')};
  color: white;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`
