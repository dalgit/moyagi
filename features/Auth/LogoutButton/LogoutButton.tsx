import { useLogoutUser } from 'hooks/auth'

const LogoutButton = () => {
  const { mutate: logoutMutate } = useLogoutUser()

  return <li onClick={logoutMutate}>로그아웃</li>
}

export default LogoutButton
