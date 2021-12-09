import React, {useState, useEffect} from 'react';

//common
import { UserState } from 'common/types';

//hooks
import useAuth from 'hooks/useAuth';

interface Props {
  user: UserState
  children: React.ReactNode;
}

const WithAuthInStore = ({user, children}: Props): JSX.Element => {
  const auth = useAuth();
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    auth.setUser(user);
    setMounted(true);
  }, [auth, setMounted]);

  if (isMounted == false)
    return <></>
  return <>{children}</>
}

export default WithAuthInStore;