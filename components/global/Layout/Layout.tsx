import React from 'react';

//css
import * as Styled from 'components/global/Layout/styles';

interface Props {
  backgroundColor?: string;
  children?: React.ReactNode
}

const Layout = ({backgroundColor, children}: Props): JSX.Element => {
  return (
    <Styled.Layout backgroundcolor={backgroundColor}>
      {children}
    </Styled.Layout>
  )
}

export default Layout;