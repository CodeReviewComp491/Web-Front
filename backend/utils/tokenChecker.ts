import nookies from 'nookies'
import axios from 'axios'

//store
import { initialState } from 'store/reducers/userReducer'

//common
import { UserState, NookiesType } from 'common/types'
import { CookieName, AuthenticationStatus } from 'common/enum'

export const isUserLogged = async (ctx: any): Promise<UserState> => {
  const cookies: NookiesType = nookies.get(ctx)
  if (cookies[CookieName.CRTOKEN] === undefined) {
    return { ...initialState, isInit: true }
  } else {
    const CRToken = cookies[CookieName.CRTOKEN]
    const config = {
      headers: { Authorization: `Bearer ${CRToken}` },
    }
    try {
      const infoRes = await axios.get(
        'http://localhost:8080/user/info/me',
        config,
      )
      if ('_id' in infoRes.data) {
        return {
          _id: infoRes.data._id,
          email: infoRes.data.email,
          username: infoRes.data.username,
          authenticationStatus: AuthenticationStatus.SUCCESS,
          token: CRToken,
          role: infoRes.data.role,
          isInit: true,
        }
      } else {
        return { ...initialState, isInit: true }
      }
    } catch (error) {
      return { ...initialState, isInit: true }
    }
  }
}
