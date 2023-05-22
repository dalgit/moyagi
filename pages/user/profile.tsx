import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next/types'
import styled from 'styled-components'
import { Tab } from '@/components/common/Tab'
import { MyPostList } from '@/components/Post/PostList'
import createServerInstance from '@/utils/axios/server'
import { userKeys } from '@/utils/queryKeys/user'

const UserProfilePage = () => {
  const MyPostsTabPair = () => (
    <Tab.Pair>
      <Tab.Title>내 글 보기</Tab.Title>
      <Tab.Content>
        <MyPostList />
      </Tab.Content>
    </Tab.Pair>
  )

  return <MyPostsTabPair />
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
