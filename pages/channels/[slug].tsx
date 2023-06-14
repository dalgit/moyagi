import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next/types'
import { ChannelTemplate, Layout, MainHeader } from 'components/Template'
import { getChannelBySlug } from 'hooks/channel/useChannel'
import { channelKeys } from 'utils/queryKeys/channel'

const ChannelPage = () => {
  return (
    <Layout>
      <MainHeader />
      <ChannelTemplate />
    </Layout>
  )
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug

  try {
    if (typeof slug !== 'string') {
      throw new Error()
    }

    const queryClient = new QueryClient()

    await queryClient.fetchQuery(channelKeys.detail(slug), () =>
      getChannelBySlug(slug),
    )

    return {
      props: { dehydratedProps: dehydrate(queryClient), slug },
    }
  } catch {
    return { notFound: true }
  }
}
