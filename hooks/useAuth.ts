import { useEffect } from 'react'
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

//store
import { setUserAction } from 'store/actions/userActions';
import { GlobalState } from 'store/interfaces';

//common
import { UserState } from 'common/types';
import { AuthenticationStatus } from 'common/enum';

interface useAuthFunctionsProps {
  setUser: (user: UserState) => void;
  withAuth: (callBack: (CRToken: string) => any) => Promise<boolean>;
}

const useAuth = (): useAuthFunctionsProps => {
  const { user }: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state
  );
  const dispatch = useDispatch();

  const setUser = (user: UserState): void => {
    dispatch(setUserAction(user));
  }

  const withAuth = async(callBack: (CRToken: string) => any): Promise<boolean> => {
    const cookies = new Cookies();
    
    const CRToken = cookies.get('CRToken');
    if (CRToken === undefined) {
      console.log('Unable to perform this operation. User is Disconnected');
      return false;
    }
    const config = {
      headers: { Authorization: `Bearer ${CRToken}` },
    }
    try {
      const infoRes = await axios.get(
        'http://localhost:8080/user/info/me',
        config,
      );
      if ('_id' in infoRes.data) {
        dispatch(
          setUserAction({
            email: infoRes.data.email,
            username: infoRes.data.username,
            authenticationStatus: AuthenticationStatus.SUCCESS,
            token: CRToken,
            role: infoRes.data.role,
          }),
        );
        callBack(CRToken);
      } else {
        console.log('Unable to perform this operation. User is Disconnected');
        return false;
      }
    } catch (error) {
        console.log(error);
        console.log('Unable to perform this operation. User is Disconnected');
        return false;
    }
    return true;
  }
  return {
    setUser: setUser,
    withAuth: withAuth,
  }
}

export default useAuth;