import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface CardProps {
  href: string
  imageSrc: string
  title: string
}

const Card = ({ href, imageSrc, title }: CardProps) => {
  return (
    <CardLayout>
      <Link href={href}>
        <ImageWrapper>
          <Image src={imageSrc} alt="thumbnail" fill />
        </ImageWrapper>
        <Title>{title}</Title>
      </Link>
    </CardLayout>
  )
}

export default Card

const CardLayout = styled.div`
  max-width: 160px;
  width: 100%;
  border-radius: 12px;
`

const ImageWrapper = styled.div`
  aspect-ratio: 1/1;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;

  img {
    border-radius: inherit;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  font-weight: bold;
`
