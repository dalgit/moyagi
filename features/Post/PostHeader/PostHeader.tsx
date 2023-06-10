import { useRouter } from 'next/router'
import { Avatar } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'
import PostHeaderMenu from 'features/Post/PostHeader/Components/PostHeaderMenu'
import { IPost } from 'types/post'
import getFormattedDate from 'utils/common/getFormattedDate'
import * as S from './style'

interface PostHeaderProps {
  post: IPost
}

const PostHeader = ({ post }: PostHeaderProps) => {
  const FormattedDate = getFormattedDate(post.createdAt)
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
      <S.Wrapper>
        <span>{FormattedDate}</span>
        <PostHeaderMenu post={post} />
      </S.Wrapper>
    </S.PostHeaderLayout>
  )
}

export default PostHeader
