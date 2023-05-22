import { ParsedUrlQuery } from 'querystring'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next/types'
import { Suspense, useState } from 'react'
import styled from 'styled-components'
import ChannelDetailCard from '@/components/Channel/ChannelDetailCard/ChannelDetailCard'
import { ChannelSideBar } from '@/components/Channel/ChannelSideBar/ChannelSideBar'
import Button from '@/components/common/Button'
import ModalFrame from '@/components/common/Modal/ModalFrame'
import { NotificationBox, BoxType } from '@/components/common/NotificationBox'
import Spinner from '@/components/common/Spinner'
import PostCreateForm from '@/components/Post/PostCreateModal/PostCreateForm'
import PostList from '@/components/Post/PostList/PostList'
import RegistrationForm from '@/components/Registration/RegistrationForm/RegistrationForm'
import { useChannel } from '@/hooks/queries/useChannel'
import { useChannelPosts } from '@/hooks/queries/useChannelPosts'
import { useMember } from '@/hooks/useMember'
import { IChannel } from '@/types/channel'
import createServerInstance from '@/utils/axios/server'
import { channelKeys } from '@/utils/queryKeys/channel'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ slug }: { slug: string }) => {
  const [isModalOpen, setIsModalActive] = useState<boolean>(false)
  const { data: channel = {} as IChannel } = useChannel(slug)
  const [isMember, checkLogin] = useMember(channel)

  const shouldFetchPosts = channel.isPublic || isMember
  const buttonTitle = isMember ? '작성하기' : '가입하기'

  const toggleModal = () => setIsModalActive(!isModalOpen)

  const handleButton = async () => {
    await checkLogin()
    toggleModal()
  }

  const { data: posts = [] } = useChannelPosts(channel._id, { suspense: true })

  // if (!posts.length) {
  //   return (
  //     <EmptyBox
  //       title="작성된 게시물이 없습니다."
  //       description="첫 글을 작성해보세요"
  //     />
  //   )
  // }

  const modalContent = isMember ? (
    <PostCreateForm channelId={channel._id} />
  ) : (
    <RegistrationForm channelId={channel._id} isPublic={channel.isPublic} />
  )

  return (
    <ChannelPageLayout>
      <ChannelInfoWrapper>
        <ChannelDetailCard channel={channel} />
        <Button onClick={handleButton}>{buttonTitle}</Button>
        <ModalFrame isModalOpen={isModalOpen} closeModal={toggleModal}>
          {modalContent}
        </ModalFrame>
      </ChannelInfoWrapper>
      {shouldFetchPosts ? (
        <PostList posts={posts} />
      ) : (
        <NotificationBox
          title="비공개 채널입니다!"
          description="가입후 이용해주세요"
          type={BoxType.sorry}
        />
      )}
      <ChannelSideBar />
    </ChannelPageLayout>
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
