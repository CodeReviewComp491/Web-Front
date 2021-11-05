import styled from 'styled-components';

import { NoneColorButton } from 'styles/globals';

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: #121212;
  overflow: auto;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 200px;
`;

interface TitleContentProps {
  color?: string;
}

export const TitleContent = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: 32px;
  color: ${(props: TitleContentProps) => props.color};
`;

export const User = styled(NoneColorButton)`
  width: 70px;
  height: 70px;
  background-image: url('/user.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 70px;
`;