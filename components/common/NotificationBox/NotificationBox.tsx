import * as S from './style'
import { NotificationBoxProps } from './type'
import type { PropsWithChildren } from 'react'

const NotificationBox = ({
  title,
  description,
  type,
  children,
  ...rest
}: PropsWithChildren<NotificationBoxProps>) => {
  return (
    <S.NotificationBoxLayout {...rest}>
      <S.NotificationImage type={type} />
      <h2>{title}</h2>
      <h4>{description}</h4>
      <>{children}</>
    </S.NotificationBoxLayout>
  )
}

export default NotificationBox
