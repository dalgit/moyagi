import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { baseUrl } from 'constants/baseUrl'
import { CHANNEL_PATH } from 'constants/paths'
import { useChannel } from 'hooks/channel'
import { IChannel } from 'types/channel'
import { withChannel } from 'utils/common/withDefaultImage'

const ChannelSEO = () => {
  const { query } = useRouter()
  const { data: channel = {} as IChannel } = useChannel(query.slug as string)

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
