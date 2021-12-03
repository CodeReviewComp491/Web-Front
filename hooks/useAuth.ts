import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

//store
import { setUserAction } from 'store/actions/userActions';
import { UserState, AuthenticationStatus } from 'store/reducers/userReducer';
import { GlobalState } from 'store/interfaces';

const useAuth = (): UserState => {
  const { user }: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('LOL');
    dispatch(setUserAction({
      name: 'Alexis',
      email: 'alexisdesrumaux@gmail.com',
      authenticationStatus: AuthenticationStatus.FAILED,
      token: '123',
    }));
  }, []);
  return user;
}

export default useAuth;