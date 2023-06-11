import { UserLink } from 'components/common'

interface UserMenuListProps {
  authorId: string
}

const UserMenuList = ({ authorId }: UserMenuListProps) => {
  return (
    <UserLink href={authorId}>
      <li>작성자 정보</li>
    </UserLink>
  )
}

export default UserMenuList
