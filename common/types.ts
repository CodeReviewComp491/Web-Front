import { AuthenticationStatus } from "common/enum";

export interface UserState {
  _id: string;
  email: string;
  username: string;
  authenticationStatus: AuthenticationStatus;
  token: string;
  role: string;
  isInit: boolean;
}

export interface NookiesType {
  [key: string]: string;
}

export interface LastRequest {
    name: string,
    description: string,
    repoUrl: string,
    stars: number,
    teamName: string,
    status: string,
    thumbnail: string,
}