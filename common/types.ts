import { AuthenticationStatus, Objectives, Skills } from 'common/enum'

export interface UserState {
  _id: string
  email: string
  username: string
  authenticationStatus: AuthenticationStatus
  token: string
  role: string
  isInit: boolean
}

export interface NookiesType {
  [key: string]: string
}

export interface LastRequest {
  name: string
  description: string
  repoUrl: string
  stars: number
  teamName: string
  status: string
  thumbnail: string
}

export interface MyAxiosResponse {
  isError: boolean
  res?: any
}

export interface Review {
  objectives: Array<Objectives>
  skillsNeeded: Array<Skills>
  reviewers: Array<any>
  _id: string
  userId: string
  name: string
  description: string
  repoUrl: string
  status: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface OtherUser {
  _id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewCommentFile {
  line: number;
  lineContent: string;
  lineSuggestion: string;
  comment: string;
  _id: string;
}

export interface ReviewCommentsFile {
  fileName: string;
  language: Skills | null;
  feedback: Array<ReviewCommentFile>;
  _id: string;
}

export interface ChildFunction {
  name: string;
  isTriggered: boolean;
  callback: (result: any) => void;
}