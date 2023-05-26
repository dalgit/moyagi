import { useRouter } from 'next/router'
import { Avatar } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'
import PostHeaderMenu from 'features/Post/PostHeader/Components/PostHeaderMenu'
import { IPost } from 'types/post'
import * as S from './style'

interface PostHeaderProps {
  post: IPost
}

const PostHeader = ({ post }: PostHeaderProps) => {
  const router = useRouter()

  const handleAvatarClick = (id: string) => {
    router.push(`/users/${id}`)
  }

  return (
    <S.PostHeaderLayout>
      <Avatar
        image={post.author.imageUrl || userDefaultImage}
        name={post.author.name}
        onClick={() => handleAvatarClick(post.author._id)}
      />
      <PostHeaderMenu post={post} />
    </S.PostHeaderLayout>
  )
}

export default PostHeader
