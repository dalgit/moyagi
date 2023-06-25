import { NextSeo } from 'next-seo'
import { baseUrl } from 'constants/baseUrl'
import { CHANNEL_PATH } from 'constants/paths'
import { useChannelQueryBySlug } from 'hooks/channel/useChannelQueryBySlug'
import { IChannel } from 'types/channel'
import { withChannel } from 'utils/common/withDefaultImage'

interface ChannelSEOProps {
  slug: string
}

const ChannelSEO = ({ slug }: ChannelSEOProps) => {
  const { data: channel = {} as IChannel } = useChannelQueryBySlug(slug)

  return (
    <NextSeo
      title={channel.name}
      description={channel.description}
      canonical={`${baseUrl + CHANNEL_PATH}/${channel.address}`}
      openGraph={{
        url: `${baseUrl + CHANNEL_PATH}/${channel.address}`,
        type: 'website',
        images: [{ url: withChannel(channel.imageUrl) }],
      }}
    />
  )
}

export default ChannelSEO
