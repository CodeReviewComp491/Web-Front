import styled from 'styled-components'

//css
import { NoneColorButton } from 'styles/globals'

export const TopBar = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const TopBarCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100%;
`

export const PageTitle = styled.span`
  font-size: 22px;
  color: #666666;
`

interface AvatarProps {
  backgroundImage: string
}

export const Avatar = styled.div`
  background-image: url(${(props: AvatarProps) => props.backgroundImage});
  width: 50px;
  height: 50px;
  background-position: center;
  background-size: contain;
  border-radius: 50px;
  cursor: pointer;
`

export const AvatarButtonDropdown = styled(NoneColorButton)`
  cursor: pointer;
`;
