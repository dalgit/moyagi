import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next/types'
import {
  ChannelTemplate,
  Layout,
  MainHeader,
  NotFoundTemplate,
} from 'components/Template'
import ChannelSEO from 'components/Template/ChannelTemplate/ChannelSEO'
import {
  getChannelBySlug,
  useChannelQueryBySlug,
} from 'hooks/channel/useChannelQueryBySlug'
import { channelKeys } from 'utils/queryKeys/channel'
import { getIsClientRouting } from 'utils/server/checkRouting'

interface ChannelPageProps {
  slug: string
}

const ChannelPage = ({ slug }: ChannelPageProps) => {
  const { isSuccess, isError } = useChannelQueryBySlug(slug)

  return (
    <>
      <ChannelSEO slug={slug} />
      <Layout>
        <MainHeader />
        {isSuccess && <ChannelTemplate />}
        {isError && <NotFoundTemplate />}
      </Layout>
    </>
  )
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug

  if (getIsClientRouting(context)) {
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
