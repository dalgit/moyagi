import { NotificationConfigType } from 'components/common/NotificationBox/type'

export const config: NotificationConfigType = {
  noPublic: {
    title: '비공개 채널입니다.',
    description: '가입후 이용해주세요',
    type: 'sorry',
  },
  noPost: {
    title: '작성된 게시물이 없습니다.',
    description: '첫 글을 작성해보세요',
    type: 'empty',
  },
}
