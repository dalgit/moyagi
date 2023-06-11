import { ReactNode } from 'react'
import { NotificationImageProps } from './style'
import * as S from './style'

interface NotificationBoxProps extends NotificationImageProps {
  title?: string
  description?: string
  children?: ReactNode
}

const NotificationBox = ({
  title,
  description,
  children,
  type,
  ...rest
}: NotificationBoxProps) => {
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
