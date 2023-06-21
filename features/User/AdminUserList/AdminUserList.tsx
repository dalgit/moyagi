import { useRecoilValue } from 'recoil'
import { NotificationBox } from 'components/common'
import managedMembersSelector from 'recoil/channel/managedMembersSelector'
import * as S from './style'
import UserBanButton from '../UserBanButton/UserBanButton'
import UserListItem from '../UserListItem/UserListItem'

const AdminChannelUserList = () => {
  const members = useRecoilValue(managedMembersSelector)

  if (!members.length) {
    return <NotificationBox title="관리중인 멤버가 없습니다." type="empty" />
  }

  return (
    <S.AdminUserListLayout>
      {members?.map((member) => (
        <UserListItem
          key={member._id}
          right={<UserBanButton userId={member._id} />}
          {...member}
        />
      ))}
    </S.AdminUserListLayout>
  )
}

export default AdminChannelUserList
