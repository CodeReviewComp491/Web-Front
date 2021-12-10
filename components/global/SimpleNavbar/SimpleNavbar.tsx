import React from 'react'
import Link from 'next/link'

//css
import * as Styled from 'components/global/SimpleNavbar/styles'

const SimpleNavbar = (): JSX.Element => {
  return (
    <Styled.Navbar>
      <Link href={'/'} passHref>
        <Styled.Title color={'white'}>
          Code <Styled.Title color={'#6DF69C'}>Review.</Styled.Title>
        </Styled.Title>
      </Link>
    </Styled.Navbar>
  )
}

export default SimpleNavbar;
