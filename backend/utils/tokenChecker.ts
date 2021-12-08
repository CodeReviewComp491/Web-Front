import nookies from 'nookies'
import axios from 'axios'

//common
import { UserState, NookiesType } from 'common/types'
import { CookieName, AuthenticationStatus } from 'common/enum'

export const isUserLogged = async (ctx: any): Promise<UserState> => {
  const cookies: NookiesType = nookies.get(ctx)
  if (cookies[CookieName.CRTOKEN] === undefined) {
    
    return {
      email: '',
      username: '',
      authenticationStatus: AuthenticationStatus.FAILED,
      token: '',
    }
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
          email: infoRes.data.email,
          username: infoRes.data.username,
          authenticationStatus: AuthenticationStatus.SUCCESS,
          token: CRToken,
        }
      } else {
        return {
          email: '',
          username: '',
          authenticationStatus: AuthenticationStatus.FAILED,
          token: '',
        }
      }
    } catch (error) {
      return {
        email: '',
        username: '',
        authenticationStatus: AuthenticationStatus.FAILED,
        token: '',
      }
    }
  }
}
