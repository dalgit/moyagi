import { ParsedUrlQuery } from 'querystring'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next/types'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import ChannelInfo from '@/components/ChannelInfo/ChannelInfo'
import Button from '@/components/common/Ui/Button'
import JoinnedChannelList from '@/components/JoinnedChannelList/JoinnedChannelList'
import ModalFrame from '@/components/Modal/ModalFrame'
import PostCreateForm from '@/components/Post/PostForm/PostCreateForm'
import { ChannelPostList } from '@/components/Post/PostList'
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm'
import { useGetChannel } from '@/hooks/queries/useGetChannel'
import { userSelector } from '@/recoil/user'
import { IChannel } from '@/types/channel'
import { IUser } from '@/types/user'
import createServerInstance from '@/utils/axios/server'

export interface IParams extends ParsedUrlQuery {
  slug: string
}

const ChannelPage = ({ slug }: { slug: string }) => {
  const [isModalOpen, setIsModalActive] = useState<boolean>(false)

  const user = useRecoilValue(userSelector)
  const { push } = useRouter()

  const { data: channel = {} as IChannel } = useGetChannel(slug)

  const isMember = channel.members.some(
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
          <ChannelPostList channelId={channel._id} />
        ) : (
          <div>가입 후 소통해보세요</div>
        )}
        <JoinnedChannelList />
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
    await queryClient.fetchQuery(['channel', slug], () =>
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

  padding-top: 50px;
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
