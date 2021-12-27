import React from 'react'
import Router from 'next/router'

//hooks
import { UseWithAuthInStoreReturnProps } from 'hooks/useWithAuthInStore'

interface Props {
  authInStore: UseWithAuthInStoreReturnProps
  mustAuthBeSuccess?: boolean
  renderAuthFail?: () => JSX.Element
  onAuthFailRedirect?: string
  children: React.ReactNode
}

const WithAuthInStore = ({
  authInStore,
  mustAuthBeSuccess,
  children,
  renderAuthFail,
  onAuthFailRedirect,
}: Props): JSX.Element => {
  if (authInStore.isAuthInStore) {
    if (mustAuthBeSuccess) {
      if (authInStore.isAuthSuccess) {
        return <>{children}</>
      } else {
        if (renderAuthFail) {
          return renderAuthFail()
        } else if (onAuthFailRedirect) {
          Router.push(onAuthFailRedirect);
          return <></>;
        } else {
          return <></>
        }
      }
    } else {
      return <>{children}</>
    }
  } else {
    return <></>
  }
}

export default WithAuthInStore
