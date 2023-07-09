import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next/types'
import { ChannelTemplate, Layout, MainHeader } from 'components/Template'
import ChannelSEO from 'components/Template/ChannelTemplate/ChannelSEO'
import { getChannelBySlug } from 'hooks/channel/useChannelQueryBySlug'
import { channelKeys } from 'utils/queryKeys/channel'
import { isClientRouting } from 'utils/server/checkRouting'

interface ChannelPageProps {
  slug: string
}

const ChannelPage = ({ slug }: ChannelPageProps) => {
  return (
    <>
      <ChannelSEO slug={slug} />
      <Layout>
        <MainHeader />
        <ChannelTemplate slug={slug} />
      </Layout>
    </>
  )
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug

  if (isClientRouting(context)) {
    return {
      props: { slug },
    }
  }

  if (typeof slug !== 'string') {
    return { notFound: true }
  }

  try {
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
