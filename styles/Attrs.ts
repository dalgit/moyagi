import styled, { AnyStyledComponent } from 'styled-components'
import { FImage } from 'components/common'
import { channelDefaultImage, userDefaultImage } from 'constants/defaultImage'

interface AttrsProps {
  src: string
  alt?: string
}

export const UserAttrs = styled(FImage).attrs<AttrsProps>(({ src }) => ({
  src: src ?? userDefaultImage,
  alt: 'user',
}))``

export const ChannelAttrs = styled(FImage).attrs<AttrsProps>(({ src }) => ({
  src: src ?? channelDefaultImage,
  alt: 'channel',
}))``

export const withUserAttrs = (Component: AnyStyledComponent) =>
  styled(Component).attrs(({ src }) => ({
    src: src ?? userDefaultImage,
    alt: 'user',
  }))``
