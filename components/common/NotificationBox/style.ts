import styled from 'styled-components'
import { empty, sorry } from 'constants/icon'
import FImage from '../FImage/FImage'

type NotificationType = 'sorry' | 'empty'

export interface NotificationImageProps {
  type: NotificationType
  alt?: string
}

export const NotificationImage = styled(FImage).attrs(
  ({ type, alt }: NotificationImageProps) => ({
    src: NotificationImageTypes[type],
    alt: alt || 'notification',
  }),
)<NotificationImageProps>`
  width: 250px;
  height: 250px;
`

const NotificationImageTypes: Record<NotificationType, string> = {
  empty: empty,
  sorry: sorry,
}

export const NotificationBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: auto;

  h2,
  h4,
  ${NotificationImage} {
    opacity: 0.5;
  }

  h2,
  h4 {
    white-space: pre-wrap;
    word-break: keep-all;
    text-align: center;
    line-height: 1.3;
  }
`
