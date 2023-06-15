import { UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import useRecoilQuery from 'hooks/common/useRecoilQuery'
import channelAtom from 'recoil/channel/channelAtom'
import { IChannel } from 'types/channel'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'

const useChannel = (slug: string): UseQueryResult<IChannel, AxiosError> => {
  return useRecoilQuery<IChannel>(channelAtom, channelKeys.detail(slug), () =>
    getChannelBySlug(slug),
  )
}

export default useChannel

export const getChannelBySlug = async (slug: string): Promise<IChannel> =>
  await client
    .get('/channels', {
      params: { channelAddress: slug },
    })
    .then((res) => res.data)
