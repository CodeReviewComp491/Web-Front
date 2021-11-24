import React from 'react';

//css
import * as Styled from 'components/pages/index/CallToSign/styles';

const CallToSign = (): JSX.Element => {
  return (
    <Styled.CallToSign>
      <Styled.Banner>
        Help<br/>community<br/>and review code
      </Styled.Banner>
      <Styled.Signup>
        <Styled.SignupInput placeholder={"E-mail adress"}/>
        <Styled.SignupButton type={"primary"}>Sign up</Styled.SignupButton>
      </Styled.Signup>
    </Styled.CallToSign>
  )
}

export default CallToSign;