import styled from 'styled-components'
import { empty, sorry } from 'constants/icon'
import { NotificationType } from './type'
import FImage from '../FImage/FImage'

interface NotificationImageProps {
  type: NotificationType
}

export const NotificationImage = styled(FImage).attrs(
  ({ type }: NotificationImageProps) => ({
    src: NotificationImageTypes[type],
    alt: 'notification',
  }),
)<NotificationImageProps>`
  aspect-ratio: 1/1;
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
  height: 100%;

  & > * {
    width: 250px;
  }

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
    width: 100%;
  }
`
