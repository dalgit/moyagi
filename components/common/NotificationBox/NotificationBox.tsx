import Image from 'next/image'
import { empty, sorry } from 'constants/icon'
import * as S from './style'

interface NotificationBoxProps {
  title: string
  description?: string
  type: BoxType
}

enum BoxType {
  sorry = 'sorry',
  empty = 'empty',
}

const NotificationBox = ({
  title,
  description,
  type,
}: NotificationBoxProps) => {
  const src = getSrc(type)
  return (
    <S.NotificationBoxLayout>
      <Image src={src} alt={type} width={250} height={250} />
      <h2>{title}</h2>
      <h4>{description}</h4>
    </S.NotificationBoxLayout>
  )
}

export { NotificationBox, BoxType }
export default NotificationBox

const getSrc = (type: string) => {
  switch (type) {
    case 'sorry':
      return sorry
    case 'empty':
      return empty
    default:
      throw new Error()
  }
}
