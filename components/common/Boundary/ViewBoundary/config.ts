import { NotificationBoxProps } from 'components/common/NotificationBox/type'

type NoFetch = Omit<NotificationBoxProps, 'type'>
type NoData = Omit<NotificationBoxProps, 'type'>

export type ConfigKeys = keyof typeof viewConfig

export type ConfigOptions = {
  noFetch?: NoFetch
  noData?: NoData
}

export const viewConfig = {
  channelPosts: {
    noFetch: {
      title: '비공개 채널입니다.',
      description: '가입후 이용해주세요',
    },
    noData: {
      title: '작성된 게시물이 없습니다.',
      description: '첫 글을 작성해보세요',
    },
  },
  ManagedMembers: {
    noData: {
      title: '관리중인 멤버가 없습니다.',
    },
  },
  ChannelRegistrations: {
    noData: {
      title: '요청된 가입이 존재하지 않습니다.',
    },
  },
  myChannels: {
    noFetch: {
      title: '로그인 후, 채널에 참여해 주세요.',
    },
    noData: {
      title: '가입된 채널이 없습니다.',
      description: '새로운 채널을 만들거나, 찾아보세요!',
    },
  },
  searchedChannels: {
    noData: {
      title: '검색된 채널이 없습니다.',
    },
  },
  userRegistrations: {
    noData: {
      title: '요청한 가입이 없습니다.',
    },
  },
  userChannels: {
    noData: {
      title: '가입된 채널이 없습니다.',
      description: '새로운 채널을 만들거나, 찾아보세요!',
    },
    noFetch: {
      title: '로그인 후, 채널에 참여해 주세요.',
    },
  },
} satisfies Record<string, ConfigOptions>
