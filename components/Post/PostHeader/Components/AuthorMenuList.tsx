import { useDeletePost } from '@/hooks/mutations/useDeletePost'

interface AuthorMenuListProps {
  postId: string
  channelId: string
}

const AuthorMenuList = ({ postId, channelId }: AuthorMenuListProps) => {
  const { mutate: deletePostMutate } = useDeletePost()

  const handleDeletePost = () => {
    if (window.confirm('정말 삭제할까요?')) {
      deletePostMutate({ postId, channelId })
    }
  }

  return <li onClick={handleDeletePost}>삭제</li>
}

export default AuthorMenuList
