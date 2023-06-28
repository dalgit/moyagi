import { MoreMenu } from 'components/common'
import { useChannel } from 'hooks/channel'
import { useDeletePost } from 'hooks/post'

interface AuthorMenuListProps {
  postId: string
}

const AuthorMenuList = ({ postId }: AuthorMenuListProps) => {
  const { mutate: deletePostMutate } = useDeletePost()
  const { _id: channelId } = useChannel()

  const handleDeletePost = () => {
    if (window.confirm('정말 삭제할까요?')) {
      deletePostMutate({ postId, channelId })
    }
  }

  return (
    <MoreMenu>
      <li onClick={handleDeletePost}>삭제</li>
    </MoreMenu>
  )
}

export default AuthorMenuList
