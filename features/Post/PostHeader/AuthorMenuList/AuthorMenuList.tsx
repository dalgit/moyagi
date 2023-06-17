import { useRecoilValue } from 'recoil'
import { MoreMenu } from 'components/common'
import { useDeletePost } from 'hooks/post'
import channelIdSelector from 'recoil/channel/channelIdSelector'

interface AuthorMenuListProps {
  postId: string
}

const AuthorMenuList = ({ postId }: AuthorMenuListProps) => {
  const { mutate: deletePostMutate } = useDeletePost()
  const channelId = useRecoilValue(channelIdSelector)

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
