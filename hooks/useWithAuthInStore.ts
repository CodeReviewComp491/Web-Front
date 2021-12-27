import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//common
import { UserState } from 'common/types'
import { AuthenticationStatus } from 'common/enum'

//hooks
import useAuth from 'hooks/useAuth'

//store
import { GlobalState } from 'store/interfaces'

interface State {
  isAuthInStore: boolean;
  isAuthSuccess: boolean;
}

export interface UseWithAuthInStoreReturnProps extends State {}

const useWithAuthInStore = (user: UserState): UseWithAuthInStoreReturnProps => {
  const auth = useAuth()
  const [state, setState] = useState<State>({
    isAuthInStore: false,
    isAuthSuccess: false,
  });
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )

  useEffect(() => {
    auth.setUser(user)
  }, [])

  useEffect(() => {
    if (storeState.user.isInit === true) {
      if (storeState.user.authenticationStatus === AuthenticationStatus.SUCCESS) {
        setState({
          isAuthInStore: true,
          isAuthSuccess: true,
        });
      } else {
        setState({
          isAuthInStore: true,
          isAuthSuccess: false,
        });
      }
    }
  }, [storeState.user.isInit, storeState.user.authenticationStatus])

  return state;
}

export default useWithAuthInStore;
