import { MyAxiosResponse, UserState, Review, OtherUser } from 'common/types'
import nookies from 'nookies'
import axios from 'axios'


export const getUserInfosById = async(user: UserState, userId: string): Promise<OtherUser | undefined> => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  }
  try {
    const userInfoRes = await axios.get(
      `http://localhost:8080/user/${userId}`,
      config,
    )
    if ('_id' in userInfoRes.data === false)
      return undefined;
    return userInfoRes.data;
  } catch (error) {
    console.log(error);
    return undefined
  }
}

export const getAllUsers = async(user: UserState): Promise<Array<OtherUser> | undefined> => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  }
  try {
    const userInfoRes = await axios.get(
      `http://localhost:8080/user`,
      config,
    )
    return userInfoRes.data;
  } catch (error) {
    console.log(error);
    return undefined
  }
}
