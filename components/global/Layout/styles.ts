import styled from "styled-components";

interface LayoutProps {
  backgroundcolor?: string;
}

export const Layout = styled.div`
  overflow: auto;
  min-height: 100vh;
  background-color: ${(props: LayoutProps) => props.backgroundcolor ? props.backgroundcolor : "white"};
`;