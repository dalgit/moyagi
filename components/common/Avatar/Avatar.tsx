import * as S from './style'

interface AvatarProps {
  image: string
  name: string
}
const Avatar = ({ image, name }: AvatarProps) => {
  return (
    <S.AvatarLayout>
      <S.AvatarImage src={image} alt="avatar" />
      <S.AvatarName>{name}</S.AvatarName>
    </S.AvatarLayout>
  )
}

export default Avatar
