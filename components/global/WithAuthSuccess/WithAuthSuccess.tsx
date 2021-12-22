import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import Router from 'next/router'

//common
import { AuthenticationStatus } from 'common/enum'

//config
import paths from 'config/routes'

//store
import { GlobalState } from 'store/interfaces'

interface Props {
  callbackAuthFail?: () => void
  renderAuthFail?: () => JSX.Element
  children: React.ReactNode
}

const WithAuthSuccess = ({
  callbackAuthFail,
  renderAuthFail,
  children,
}: Props): JSX.Element => {
  const { user }: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )

  useEffect(() => {
    if (user.authenticationStatus === AuthenticationStatus.FAILED) {
      if (callbackAuthFail) {
        callbackAuthFail();
      }
    }
  }, [user.authenticationStatus]);

  if (user.authenticationStatus === AuthenticationStatus.FAILED) {
    if (renderAuthFail) {
      return renderAuthFail()
    }
    return <></>
  }
  return <>{children}</>
}

export default WithAuthSuccess;
