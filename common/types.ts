import { AuthenticationStatus } from "common/enum";

export interface UserState {
  email: string;
  username: string;
  authenticationStatus: AuthenticationStatus;
  token: string;
}

export interface NookiesType {
  [key: string]: string;
}