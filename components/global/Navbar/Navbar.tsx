import React from 'react'
import Link from 'next/link'

//css
import * as Styled from 'components/global/Navbar/styles'

const Navbar = (): JSX.Element => {
  return (
    <Styled.Navbar>
      <Styled.Title>
        <Link href={'/'}>
          <Styled.TitleContent color={'white'}>
            Code{' '}
            <Styled.TitleContent color={'#6DF69C'}>Review.</Styled.TitleContent>
          </Styled.TitleContent>
        </Link>
      </Styled.Title>
      <Styled.NavBarLinks>
        <Link href={'/signin'}>
          <Styled.NavBarLinkText>Sign in</Styled.NavBarLinkText>
        </Link>
        <Link href={'/signup'}>
          <Styled.NavBarLinkText last>Sign up</Styled.NavBarLinkText>
        </Link>
      </Styled.NavBarLinks>
    </Styled.Navbar>
  )
}

export default Navbar
