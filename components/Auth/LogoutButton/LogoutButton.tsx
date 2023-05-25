import useLogoutUser from '@/components/Auth/hooks/useLogoutUser'

const LogoutButton = () => {
  const { mutate: logoutMutate } = useLogoutUser()

  return <li onClick={logoutMutate}>로그아웃</li>
}

export default LogoutButton
