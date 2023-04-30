import Link from 'next/link'
import styled, { css } from 'styled-components'
import FImage from './FImage'

interface CardStyle {
  width?: string
  padding?: string
  hasBoxShadow?: boolean
}

interface CardProps extends CardStyle {
  href: string
  imageSrc: string
  title: string
}

const Card = ({ href, imageSrc, title, ...rest }: CardProps) => {
  return (
    <CardLayout {...rest}>
      <Link href={href}>
        <StyledImage src={imageSrc} />
        <Title>{title}</Title>
      </Link>
    </CardLayout>
  )
}

export default Card

Card.defaultProps = {
  width: '160px',
  padding: '5px',
  hasBoxShadow: true,
}

const StyledImage = styled(FImage)`
  border-radius: 12px;
  width: 100%;
  aspect-ratio: 1/1;
`

const CardLayout = styled.div<CardStyle>`
  border-radius: 12px;

  ${({ width }) => css`
    width: ${width};
  `}

  ${StyledImage} {
    ${({ hasBoxShadow }) =>
      hasBoxShadow &&
      css`
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      `}
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-weight: bold;
`
