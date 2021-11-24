import styled from "styled-components";

interface LayoutProps {
  backgroundColor?: string;
}

export const Layout = styled.div`
  overflow: auto;
  min-height: 100vh;
  background-color: ${(props: LayoutProps) => props.backgroundColor ? props.backgroundColor : "white"};
`;