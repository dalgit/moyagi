import { MoreMenu, UserLink } from 'components/common'

interface UserMenuListProps {
  authorId: string
}

const UserMenuList = ({ authorId }: UserMenuListProps) => {
  return (
    <MoreMenu>
      <UserLink href={authorId}>
        <li>작성자 정보</li>
      </UserLink>
    </MoreMenu>
  )
}

export default UserMenuList
