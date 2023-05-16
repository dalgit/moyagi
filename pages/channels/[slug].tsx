import { ParsedUrlQuery } from 'querystring'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next/types'
import { Suspense, useState } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import ChannelInfo from '@/components/Channel/ChannelInfo/ChannelInfo'
import { ChannelSideBar } from '@/components/Channel/ChannelSideBar/ChannelSideBar'
import Button from '@/components/common/Button'
import ModalFrame from '@/components/common/Modal/ModalFrame'
import Spinner from '@/components/common/Spinner'
import PostCreateForm from '@/components/Post/PostForm/PostCreateForm'
import { ChannelPostList } from '@/components/Post/PostList'
import RegistrationForm from '@/components/Registration/RegistrationForm/RegistrationForm'
import { useChannel } from '@/hooks/queries/useChannel'
import { userSelector } from '@/recoil/user'
import { IChannel } from '@/types/channel'
import { IUser } from '@/types/user'
import createServerInstance from '@/utils/axios/server'
import { channelKeys } from '@/utils/queryKeys/channel'
export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ slug }: { slug: string }) => {
  const [isModalOpen, setIsModalActive] = useState<boolean>(false)

  const user = useRecoilValue(userSelector)
  const { push } = useRouter()

  const { data: channel = {} as IChannel } = useChannel(slug)

  const isMember = channel?.members.some(
    (member: IUser) => member._id === user?._id,
  )

  const shouldFetchPosts = channel.isPublic || isMember
  const buttonTitle = isMember ? '작성하기' : '가입하기'

  const checkUser = () => {
    if (!user) {
      return push('/login')
    }
  }

  const toggleModal = () => setIsModalActive(!isModalOpen)

  const handleButton = async () => {
    await checkUser()
    toggleModal()
  }

  return (
    <>
      <ChannelPageLayout>
        <ChannelInfoWrapper>
          <ChannelInfo channel={channel} />
          <Button onClick={handleButton}>{buttonTitle}</Button>
        </ChannelInfoWrapper>
        {shouldFetchPosts ? (
          <Suspense fallback={<Spinner />}>
            <ChannelPostList channelId={channel._id} />
          </Suspense>
        ) : (
          <div>가입 후 소통해보세요</div>
        )}
        <ChannelSideBar />
      </ChannelPageLayout>

      <ModalFrame isModalOpen={isModalOpen} closeModal={toggleModal}>
        {isMember ? (
          <PostCreateForm channelId={channel._id} />
        ) : (
          <RegistrationForm
            channelId={channel._id}
            isPublic={channel.isPublic}
          />
        )}
      </ModalFrame>
    </>
  )
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const { slug } = params as IParams

  const server = createServerInstance(context)

  const queryClient = new QueryClient()

  try {
    await queryClient.fetchQuery(channelKeys.detail(slug), () =>
      server
        .get('http://localhost:3000/api/channels', {
          params: { channelAddress: slug },
        })
        .then((res) => res.data),
    )
    return {
      props: { dehydratedProps: dehydrate(queryClient), slug },
    }
  } catch {
    return { notFound: true }
  }
}
const ChannelPageLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0 50px 0;
  min-height: 100%;
`

const ChannelInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #f2f3f5;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  gap: 10px;
`
