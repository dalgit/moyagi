import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { ISitemapField, getServerSideSitemapLegacy } from 'next-sitemap'
import { baseUrl } from 'constants/baseUrl'
import { CHANNEL_PATH } from 'constants/paths'
import { getRecommendedChannels } from 'hooks/channel/useRecommendedChannels'

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const channels = await getRecommendedChannels()

  const channelFields: ISitemapField[] = channels.map((channel) => {
    return {
      loc: `${baseUrl}/${CHANNEL_PATH}/${channel.address}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1,
    }
  })

  return getServerSideSitemapLegacy(context, channelFields)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return
}
