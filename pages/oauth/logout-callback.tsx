import { useEffect } from 'react'
import { Spinner } from 'components/common'
import { useLogoutUser } from 'hooks/auth'

const LogoutCallbackPage = () => {
  const { mutate: logoutMutate } = useLogoutUser()

  useEffect(() => {
    logoutMutate({})
  }, [logoutMutate])

  return <Spinner />
}

export default LogoutCallbackPage
