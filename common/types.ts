import { AuthenticationStatus } from "common/enum";

export interface UserState {
  email: string;
  username: string;
  authenticationStatus: AuthenticationStatus;
  token: string;
  role: string;
}

export interface NookiesType {
  [key: string]: string;
}

export interface LastRequest {
    name: string,
    description: string,
    repo_url: string,
    stars: number,
    teamName: string,
    status: string,
    thumbnail: string,
}