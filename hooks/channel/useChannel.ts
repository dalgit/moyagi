import { useRouter } from 'next/router'
import { IChannel } from 'types/channel'
import { useChannelQueryBySlug } from './useChannelQueryBySlug'

const useChannel = <T = IChannel>(selectFn?: (data: IChannel) => T) => {
  const router = useRouter()
  const slug = router.query.slug

  if (typeof slug !== 'string') {
    throw new Error(`${slug}는 올바른 주소가 아닙니다.`)
  }

  const { data } = useChannelQueryBySlug<T>(slug, {
    initialData: {} as IChannel,
    ...(selectFn && { select: selectFn }),
  })

  return data as T
}

export default useChannel
