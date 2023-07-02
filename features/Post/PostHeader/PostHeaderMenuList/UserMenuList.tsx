import { MoreMenu, UserLink } from 'components/common'
import { usePostById } from 'hooks/post/usePost'

interface UserMenuListProps {
  postId: string
}

const UserMenuList = ({ postId }: UserMenuListProps) => {
  const { data } = usePostById(postId)

  return (
    <MoreMenu>
      <UserLink href={data?.author._id ?? ''}>
        <li>작성자 정보</li>
      </UserLink>
    </MoreMenu>
  )
}

export default UserMenuList
