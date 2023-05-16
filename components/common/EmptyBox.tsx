import Image from 'next/image'
import styled from 'styled-components'
import { empty } from '@/constants/icon'

interface EmptyBoxProps {
  title: string
  description: string
}

export const EmptyBox = ({ title, description }: EmptyBoxProps) => {
  return (
    <EmptyBoxLayout>
      <Image src={empty} alt="empty" width={250} height={250} />
      <h2>{title}</h2>
      <h4>{description}</h4>
    </EmptyBoxLayout>
  )
}

const EmptyBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  opacity: 0.7;
`
