import { UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import useRecoilQuery from 'hooks/common/useRecoilQuery'
import channelSelector from 'recoil/channel/channelSelector'
import { IChannel } from 'types/channel'
import client from 'utils/axios/axios'
import { channelKeys } from 'utils/queryKeys/channel'

const useChannel = (slug: string): UseQueryResult<IChannel, AxiosError> => {
  return useRecoilQuery<IChannel>(
    channelSelector,
    channelKeys.detail(slug),
    () => getChannelBySlug(slug),
  )
}

export default useChannel

const getChannelBySlug = async (slug: string): Promise<IChannel> =>
  await client
    .get('/channels', {
      params: { channelAddress: slug },
    })
    .then((res) => res.data)
