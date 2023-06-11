import { channelDefaultImage, userDefaultImage } from 'constants/defaultImage'

type imageProps = string | undefined | null

export const withUser = (image: imageProps): string => {
  return image ?? userDefaultImage
}

export const withChannel = (image: imageProps): string => {
  return image ?? channelDefaultImage
}
