import { HtmlHTMLAttributes } from 'react'
import * as S from './style'

interface AvatarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  image: string
  name: string
}

const Avatar = ({ image, name, ...rest }: AvatarProps) => {
  return (
    <S.AvatarLayout {...rest}>
      <S.AvatarImage src={image} alt="avatar" />
      <S.AvatarName>{name}</S.AvatarName>
    </S.AvatarLayout>
  )
}

export default Avatar
