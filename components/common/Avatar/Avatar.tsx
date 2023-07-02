import { useRouter } from 'next/router'
import { HtmlHTMLAttributes } from 'react'
import { userDefaultImage, channelDefaultImage } from 'constants/defaultImage'
import { blank } from 'constants/icon'
import * as S from './style'

export interface AvatarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  image: string | undefined
  name?: string
  href?: string
  size?: number
  type: 'channel' | 'user' | 'default'
}

const Avatar = ({
  image,
  type = 'default',
  name,
  href,
  size,
  ...rest
}: AvatarProps) => {
  const router = useRouter()

  const handleAvatarClick = () => {
    if (href) {
      router.push(href)
    }
  }

  return (
    <S.AvatarLayout onClick={handleAvatarClick} {...rest}>
      <S.AvatarImage
        size={size}
        src={image ?? defaultImage[type]}
        alt="avatar"
      />
      {name && <S.AvatarName>{name}</S.AvatarName>}
    </S.AvatarLayout>
  )
}

export default Avatar

const defaultImage = {
  channel: channelDefaultImage,
  user: userDefaultImage,
  default: blank,
}
