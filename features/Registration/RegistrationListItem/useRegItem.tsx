import { AvatarProps } from 'components/common/Avatar/Avatar'
import { useCheckMyReg, useReg } from 'hooks/registration/useRegsData'
import AdminMenus from './Menus/AdminMenus'
import RequesterMenus from './Menus/RequesterMenus'

const useRegItem = (registrationId: string) => {
  const { status, channel, requester } = useReg(registrationId)
  const isPending = status === 'pending'
  const userType = useCheckMyReg(registrationId) ? 'requester' : 'admin'

  const avatarProps: AvatarProps =
    userType === 'requester'
      ? {
          name: channel.name,
          image: channel.imageUrl,
          href: `/channels/${channel.address}`,
          type: 'channel',
        }
      : {
          name: requester.name,
          image: requester.imageUrl,
          href: `/users/${requester._id}`,
          type: 'user',
        }

  const Menus = () => {
    if (!isPending) {
      return <></>
    }

    return userType === 'requester' ? (
      <RequesterMenus registrationId={registrationId} />
    ) : (
      <AdminMenus registrationId={registrationId} />
    )
  }

  return { avatarProps, Menus }
}

export default useRegItem
