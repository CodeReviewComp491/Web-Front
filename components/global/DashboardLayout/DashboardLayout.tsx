import React from 'react'

//config
import paths from 'config/routes'

//components
import Layout from 'components/global/Layout/Layout'
import LeftNavbar from 'components/global/DashboardLayout/LeftNavbar/LeftNavbar'
import TopBar from 'components/global/DashboardLayout/TopBar/TopBar'

//css
import * as Styled from 'components/global/DashboardLayout/styles'

interface Props {
  children?: React.ReactNode;
  keySelected: number;
  pageTitle: string;
}

const DashboardLayout = ({ children, keySelected, pageTitle }: Props): JSX.Element => {
  return (
    <Layout backgroundColor={'#e8e8e8'}>
      <Styled.Wrapper>
        <LeftNavbar keySelected={keySelected} />
        <Styled.LayoutCenter>
          <TopBar pageTitle={pageTitle}/>
          <Styled.LayoutContent>{children}</Styled.LayoutContent>
        </Styled.LayoutCenter>
      </Styled.Wrapper>
    </Layout>
  )
}

export default DashboardLayout
