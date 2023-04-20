import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next/types'
import { useState, useEffect } from 'react'
import JoinRequestForm from '@/components/JoInRequestForm/JoinRequestForm'
import ModalFrame from '@/components/Modal/ModalFrame'
import PostCreateForm from '@/components/PostForm/PostCreateForm'
import PostList from '@/components/PostList/PostList'
import client from '@/utils/axios/axios'
import createServerInstance from '@/utils/axios/server'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ channel, userInfo }: any) => {
  const [posts, setPosts] = useState([])
  const [isPostCreateModalActive, setIsPostCreateModalActive] =
    useState<boolean>(false)
  const [isJoinRequestModalActive, setIsJoinRequestModalActive] =
    useState<boolean>(false)

  const { push } = useRouter()

  const isMember = userInfo
    ? channel.members.some((member: any) => member._id === userInfo._id)
    : false

  useEffect(() => {
    const shouldFetchPosts = channel.isPublic || isMember

    if (shouldFetchPosts) {
      client
        .get(`/channels/${channel._id}/posts`)
        .then((res) => setPosts(res.data))
    }
  }, [channel._id, channel.isPublic, isMember])

  const handleModal = (toggleModal: any) => {
    if (!userInfo) push('/login')
    toggleModal()
  }

  const togglePostCreateModal = () =>
    setIsPostCreateModalActive(!isPostCreateModalActive)

  const toggleJoinRequestModal = () =>
    setIsJoinRequestModalActive(!isJoinRequestModalActive)

  return (
    <div>
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

      <div>
        <div>{channel.name}</div>
        <div>{channel.description}</div>
        <div>매니저 : {channel.manager.name}</div>
      </div>

      {isMember ? (
        <button onClick={() => handleModal(togglePostCreateModal)}>
          작성하기
        </button>
      ) : (
        <button onClick={() => handleModal(toggleJoinRequestModal)}>
          가입하기
        </button>
      )}

      <PostList posts={posts} />
    </div>
  )
}

export default ChannelPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const { slug } = params as IParams

  const server = createServerInstance(context)

  const channel = await server
    .get('http://localhost:3000/api/channels', {
      params: { channelAddress: slug },
    })
    .then((res) => res.data.channel)

  const userInfo = await server
    .get('http://localhost:3000/api/users/me')
    .then((res) => {
      return res.data
    })
    .catch(() => {
      return null
    })

  return {
    props: { channel, userInfo },
  }
}
