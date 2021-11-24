import React from "react";

//css
import * as Styled from "components/pages/index/Navbar/styles";

const Navbar = (): JSX.Element => {
  return (
    <Styled.Navbar>
      <Styled.Title>
        <Styled.TitleContent color={"white"}>
          Code{" "}
          <Styled.TitleContent color={"#6DF69C"}>Review.</Styled.TitleContent>
        </Styled.TitleContent>
      </Styled.Title>
      <Styled.User/>
    </Styled.Navbar>
  );
};

export default Navbar;
