import client from '../axios/axios'

export const getMyChannels = () =>
  client.get('/users/me/channels').then((res) => res.data)

export const searchChannels = async (keyword: string) => {
  return await client
    .get('/channels', { params: { keyword } })
    .then((res) => res.data)
}

export const createJoinRequest = async ({
  channelId,
  message,
  isPublic,
}: {
  channelId: string
  message: string
  isPublic: boolean
}) => {
  return await client.post(`/channels/${channelId}/join-requests`, {
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
  return await client.post('/auth/login', {
    email,
    password,
  })
}

export const resiterUser = async ({
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
  return await client.post('/auth/login', {
    name,
    email,
    password,
    passwordConfirm,
  })
}

export const logoutUser = async () => {
  return await client.post('/auth/logout')
}

export const getChannelBySlug = async (slug: string) => {
  return await client
    .get('http://localhost:3000/api/channels', {
      params: { channelAddress: slug },
    })
    .then((res) => res.data)
}

export const getChannelPostsById = async (channelId: string) => {
  return await client
    .get(`/channels/${channelId}/posts`)
    .then((res) => res.data)
}

export const getMyPosts = async () => {
  return await client.get('/users/me/posts').then((res) => res.data)
}

export const getMyJoinRequests = async () => {
  return await client.get('/users/me/join-requests').then((res) => res.data)
}

export const getMyJoinnedChannels = async () => {
  return await client.get('/users/me/channels').then((res) => res.data)
}

export const getChannelJoinRequests = async (channelId: string) => {
  return await client
    .get(`/channels/${channelId}/join-requests`)
    .then((res) => res.data)
}

export const patchJoinRequestStatus = async ({
  channelId,
  requestId,
  status,
}: {
  channelId: string
  requestId: string
  status: string
}) => {
  return await client.patch(
    `/channels/${channelId}/join-requests/${requestId}`,
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
