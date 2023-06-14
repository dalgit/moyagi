import { HtmlHTMLAttributes } from 'react'
import { blank } from 'constants/icon'
import * as S from './style'

export interface AvatarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  image: string
  name: string
}

const Avatar = ({ image = blank, name, ...rest }: AvatarProps) => {
  return (
    <S.AvatarLayout {...rest}>
      <S.AvatarImage src={image} alt="avatar" />
      <S.AvatarName>{name}</S.AvatarName>
    </S.AvatarLayout>
  )
}

export default Avatar
