import { NotificationConfigType } from 'components/common/NotificationBox/type'

export const config: NotificationConfigType = {
  noUser: {
    title: '로그인 후, 채널에 참여해 주세요.',
    type: 'empty',
  },
  noChannel: {
    title: '가입된 채널이 없습니다.',
    description: '새로운 채널을 만들거나, 찾아보세요!',
    type: 'empty',
  },
}
