import React from 'react'
import useChannelMembers from 'features/Channel/hooks/useChannelMembers'
import UserListItem from '../../../User/UserListItem/UserListItem'
import UserBanButton from '../UserBanButton/UserBanButton'

interface AdminUserListProps {
  channelId: string
}

const AdminUserList = ({ channelId }: AdminUserListProps) => {
  const { data: users = [] } = useChannelMembers(channelId)

  if (!users.length) {
    return <div>1</div>
  }

  return (
    <div>
      {users?.map((user) => (
        <UserListItem
          key={user._id}
          id={user._id}
          right={<UserBanButton channelId={channelId} userId={user._id} />}
          {...user}
        />
      ))}
    </div>
  )
}

export default AdminUserList
