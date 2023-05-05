import { IChannel } from '@/types/channel'
import { IRegistration } from '@/types/registration'
import { IPost } from '@/types/post'
import { IUser } from '@/types/user'
import client from '../axios/axios'

export const searchChannels = async (keyword: string): Promise<IChannel[]> => {
  return await client
    .get('/channels', { params: { keyword } })
    .then((res) => res.data)
}

export const deleteRegistration = async ({
  registrationId,
  channelId,
}: {
  registrationId: string
  channelId: string
}) => {
  return await client.delete(
    `/channels/${channelId}/registrations/${registrationId}`,
  )
}

export const deletePost = async ({
  channelId,
  postId,
}: {
  channelId: string
  postId: string
}) => {
  return await client.delete(`/channels/${channelId}/posts/${postId}`)
}

export const createRegistration = async ({
  channelId,
  message,
  isPublic,
}: {
  channelId: string
  message: string
  isPublic: boolean
}) => {
  return await client.post(`/channels/${channelId}/registrations`, {
    message,
    isPublic,
  })
}

export const authenticateUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  return await client
    .post('/auth/login', {
      email,
      password,
    })
    .then((res) => res.data)
}

export const registerUser = async ({
  name,
  email,
  password,
  passwordConfirm,
}: {
  name: string
  email: string
  password: string
  passwordConfirm: string
}) => {
  return await client.post('/auth/signup', {
    name,
    email,
    password,
    passwordConfirm,
  })
}

export const logoutUser = async () => {
  return await client.post('/auth/logout')
}

export const getChannelBySlug = async (slug: string): Promise<IChannel> => {
  return await client
    .get('http://localhost:3000/api/channels', {
      params: { channelAddress: slug },
    })
    .then((res) => res.data)
}

export const getChannelPostsById = async (
  channelId: string,
): Promise<IPost[]> => {
  return await client
    .get(`/channels/${channelId}/posts`)
    .then((res) => res.data)
}

export const getMyPosts = async (): Promise<IPost[]> => {
  return await client.get('/users/me/posts').then((res) => res.data)
}

export const getMyRegistrations = async (): Promise<IRegistration[]> => {
  return await client.get('/users/me/registrations').then((res) => res.data)
}

export const getMyJoinnedChannels = async (): Promise<IChannel[]> => {
  return await client.get('/users/me/channels').then((res) => res.data)
}

export const getChannelRegistrations = async (
  channelId: string,
): Promise<IRegistration[]> => {
  return await client
    .get(`/channels/${channelId}/registrations`)
    .then((res) => res.data)
}

export const patchRegistrationStatus = async ({
  channelId,
  registrationId,
  status,
}: {
  channelId: string
  registrationId: string
  status: string
}) => {
  return await client.patch(
    `/channels/${channelId}/registrations/${registrationId}`,
    {
      status,
    },
  )
}

export const createChannel = async ({
  name,
  address,
  description,
  isPublic,
}: {
  name: string
  address: string
  description: string
  isPublic: boolean
}) => {
  return await client.post('/channels', {
    name,
    address,
    description,
    isPublic,
  })
}

export const createPost = async ({
  channelId,
  content,
}: {
  channelId: string
  content: string
}) => {
  return await client.post(`/channels/${channelId}/posts`, { content })
}

export const getMyInformation = async (): Promise<IUser> => {
  return await client.get(`/users/me`).then((res) => res.data)
}
