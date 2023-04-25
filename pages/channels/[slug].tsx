import { ParsedUrlQuery } from 'querystring'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next/types'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import JoinedChannelList from '@/components/JoinedChannelList/JoinedChannelList'
import JoinRequestForm from '@/components/JoInRequestForm/JoinRequestForm'
import ModalFrame from '@/components/Modal/ModalFrame'
import PostCreateForm from '@/components/PostForm/PostCreateForm'
import PostList from '@/components/PostList/PostList'
import { userSelector } from '@/recoil/user'
import client from '@/utils/axios/axios'
import createServerInstance from '@/utils/axios/server'
export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ slug }: { slug: string }) => {
  const [isPostCreateModalActive, setIsPostCreateModalActive] =
    useState<boolean>(false)
  const [isJoinRequestModalActive, setIsJoinRequestModalActive] =
    useState<boolean>(false)

  const user = useRecoilValue(userSelector)
  const { push } = useRouter()

  const { data: channel } = useQuery(['channel', slug], () =>
    client
      .get('http://localhost:3000/api/channels', {
        params: { channelAddress: slug },
      })
      .then((res) => res.data),
  )
  const isMember = channel.members.some(
    (member: any) => member._id === user?._id,
  )
  const shouldFetchPosts = channel.isPublic || isMember

  const { data: posts } = useQuery(
    ['posts', slug],
    () => client.get(`/channels/${channel._id}/posts`).then((res) => res.data),
    { enabled: shouldFetchPosts },
  )

  const handleModal = (toggleModal: any) => {
    if (!user) push('/login')
    toggleModal()
  }

  const togglePostCreateModal = () =>
    setIsPostCreateModalActive(!isPostCreateModalActive)

  const toggleJoinRequestModal = () =>
    setIsJoinRequestModalActive(!isJoinRequestModalActive)

  return (
    <>
      <ModalFrame
        isModalOpen={isPostCreateModalActive}
        closeModal={togglePostCreateModal}
      >
        <JoinRequestForm
          closeModal={togglePostCreateModal}
          channelId={channel._id}
          isPublic={channel.isPublic}
        />
      </ModalFrame>

      <ModalFrame
        isModalOpen={isPostCreateModalActive}
        closeModal={togglePostCreateModal}
      >
        <PostCreateForm channelId={channel._id} />
      </ModalFrame>

      <ChannelPageLayout>
        <ChannelBox>
          <div>{channel.name}</div>
          <div>{channel.description}</div>
          <div>매니저 : {channel.manager.name}</div>

          {isMember ? (
            <button onClick={() => handleModal(togglePostCreateModal)}>
              작성하기
            </button>
          ) : (
            <button onClick={() => handleModal(toggleJoinRequestModal)}>
              가입하기
            </button>
          )}
        </ChannelBox>

        <PostList posts={posts} />
        <JoinedChannelList />
      </ChannelPageLayout>
    </>
  )
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const { slug } = params as IParams

  const server = createServerInstance(context)

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['channel', slug], () =>
    server
      .get('http://localhost:3000/api/channels', {
        params: { channelAddress: slug },
      })
      .then((res) => res.data),
  )

  return {
    props: { dehydratedProps: dehydrate(queryClient), slug },
  }
}

const ChannelBox = styled.div`
  border: 2px solid red;
  width: 180px;
`

const ChannelPageLayout = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 50px;
`
