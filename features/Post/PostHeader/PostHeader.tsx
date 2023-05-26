import { useRouter } from 'next/router'
import Avatar from 'components/common/Avatar/Avatar'
import { userDefaultImage } from 'constants/defaultImage'
import { ChannelSideBar } from 'features/Channel'
import { IPost } from 'types/post'
import PostHeaderMenu from './Components/PostHeaderMenu'
import * as S from './style'
import ChannelCa
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
