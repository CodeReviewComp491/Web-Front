import React from 'react';

//components
import Layout from 'components/global/Layout/Layout';
import LeftNavbar from 'components/global/DashboardLayout/LeftNavbar/LeftNavbar';
import TopBar from 'components/global/DashboardLayout/TopBar/TopBar';

//css
import * as Styled from 'components/global/DashboardLayout/styles';

const DashboardLayout = (): JSX.Element => {
  return (
    <Layout backgroundColor={'#e8e8e8'}>
      <Styled.Wrapper>
        <LeftNavbar/>
        <Styled.LayoutCenter>
          <TopBar/>
          <Styled.LayoutContent>

          </Styled.LayoutContent>
        </Styled.LayoutCenter>
      </Styled.Wrapper>
    </Layout>
  )
}

export default DashboardLayout;