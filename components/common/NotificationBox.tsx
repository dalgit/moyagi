import Image from 'next/image'
import styled from 'styled-components'
import { empty, sorry } from '@/constants/icon'

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
    <NotificationBoxLayout>
      <Image src={src} alt={type} width={250} height={250} />
      <h2>{title}</h2>
      <h4>{description}</h4>
    </NotificationBoxLayout>
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

const NotificationBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  opacity: 0.7;
  height: 100%;
`
