import styled from "styled-components";
import { Input, Button } from "antd";

export const CallToSign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 560px;
  height: 385px;
  margin-top: 225px;
  margin-left: 240px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 285px;
  background-color: #0c6c44;
  border-radius: 23px;
  font-size: 72px;
  color: white;
  line-height: 85px;
  padding-top: 10px;
  padding-left: 15px;
`;

export const Signup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 530px;
  height: 80px;
  `;

export const SignupInput = styled(Input)`
  height: 80px;
  width: 350px;
  font-size: 25px;
  border-radius: 8px;

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-size: 25px;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    font-size: 25px;
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    font-size: 25px;
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    font-size: 25px;
  }
`;

export const SignupButton = styled(Button)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 80px;
  color: white;
  background-color: #110A61;
  font-size: 35px;
  border: none;

  &:hover {
    background-color: #130b6e !important;
  }
`;
