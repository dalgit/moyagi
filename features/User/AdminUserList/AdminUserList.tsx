import { useRecoilValue } from 'recoil'
import { NotificationBox } from 'components/common'
import membersExceptManagerSelector from 'recoil/channel/channelMemberSelector'
import UserBanButton from '../UserBanButton/UserBanButton'
import UserListItem from '../UserListItem/UserListItem'

const AdminChannelUserList = () => {
  const members = useRecoilValue(membersExceptManagerSelector)

  if (!members.length) {
    return <NotificationBox title="관리중인 멤버가 없습니다." type="empty" />
  }
  return (
    <div>
      {members?.map((member) => (
        <UserListItem
          key={member._id}
          right={<UserBanButton userId={member._id} />}
          {...member}
        />
      ))}
    </div>
  )
}

export default AdminChannelUserList
