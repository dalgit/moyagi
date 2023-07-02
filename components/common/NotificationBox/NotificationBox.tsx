import * as S from './style'
import { NotificationBoxProps } from './type'

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
