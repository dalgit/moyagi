import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next/types'
import styled from 'styled-components'
import {
  SubscribedChannels,
  ManagedChannelList,
} from '@/components/Channel/ChannelList'
import { Tab } from '@/components/common/Tab'
import { MyPostList } from '@/components/Post/PostList'
import { MyRegistrationList } from '@/components/Registration/RegistrationList'
import createServerInstance from '@/utils/axios/server'
import { userKeys } from '@/utils/queryKeys/user'

const UserProfilePage = () => {
  const MyChannelTabPair = () => (
    <Tab.Pair>
      <Tab.Title>채널</Tab.Title>
      <Tab.Content>
        <DividedChannelTab />
      </Tab.Content>
    </Tab.Pair>
  )

  const DividedChannelTab = () => {
    const ManagedChannelsTabPair = () => (
      <Tab.Pair>
        <Tab.Title>운영</Tab.Title>
        <Tab.Content>
          <ManagedChannelList />
        </Tab.Content>
      </Tab.Pair>
    )

    const SubscribedChannelsTabPair = () => (
      <Tab.Pair>
        <Tab.Title>가입 </Tab.Title>
        <Tab.Content>
          <SubscribedChannels />
        </Tab.Content>
      </Tab.Pair>
    )

    return (
      <Tab>
        <ManagedChannelsTabPair />
        <SubscribedChannelsTabPair />
      </Tab>
    )
  }

  const MyRegistrationTabPair = () => (
    <Tab.Pair>
      <Tab.Title>가입신청</Tab.Title>
      <Tab.Content>
        <MyRegistrationList />
      </Tab.Content>
    </Tab.Pair>
  )

  const MyPostsTabPair = () => (
    <Tab.Pair>
      <Tab.Title>내 글 보기</Tab.Title>
      <Tab.Content>
        <MyPostList />
      </Tab.Content>
    </Tab.Pair>
  )

  return (
    <ProfilePageLayout>
      <Tab>
        <MyChannelTabPair />
        <MyRegistrationTabPair />
        <MyPostsTabPair />
      </Tab>
    </ProfilePageLayout>
  )
}

export default UserProfilePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const server = createServerInstance(context)
  const queryClient = new QueryClient()

  try {
    await queryClient.fetchQuery(userKeys.me(), () =>
      server.get('/users/me').then((res) => res.data),
    )
    return {
      props: { dehydratedProps: dehydrate(queryClient) },
    }
  } catch {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
}

const ProfilePageLayout = styled.div`
  padding: 20px 150px 0 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
