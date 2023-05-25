import Image from 'next/image'
import { empty, sorry } from '@/constants/icon'
import * as S from './style'

interface NotificationBoxProps {
  title: string
  description?: string
  type: BoxType
}

export enum BoxType {
  sorry = 'sorry',
  empty = 'empty',
}

export const NotificationBox = ({
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

const getSrc = (type: BoxType) => {
  switch (type) {
    case BoxType.sorry:
      return sorry
    case BoxType.empty:
      return empty
    default:
      throw new Error()
  }
}
