import styled from 'styled-components'

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: #121212;
  overflow: auto;
`

interface TitleProps {
  color?: string
}

export const Title = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 42px;
  color: ${(props: TitleProps) => props.color};

  &:hover {
    cursor: pointer;
  }
`