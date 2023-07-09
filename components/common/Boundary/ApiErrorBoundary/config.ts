import { NotificationBoxProps } from 'components/common/NotificationBox/type'

interface ConfigOptions extends NotificationBoxProps {
  retry?: boolean
}

export const errorConfig: Record<number | 'default', ConfigOptions> = {
  400: {
    type: 'sorry',
    title: '올바른 요청이 아닙니다.',
  },
  404: {
    type: 'empty',
    title: '요청한 데이터가 존재하지 않습니다.',
  },
  default: {
    type: 'sorry',
    title: '서버가 불안정합니다.',
    description: '잠시후 다시 시도해주세요.',
    retry: true,
  },
}
