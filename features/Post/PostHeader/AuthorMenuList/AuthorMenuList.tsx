import { useRecoilValue } from 'recoil'
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

  return <li onClick={handleDeletePost}>삭제</li>
}

export default AuthorMenuList
