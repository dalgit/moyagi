import Link from 'next/link'
import * as S from './style'

export interface CardStyle {
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
    <S.CardLayout {...rest}>
      <Link href={href}>
        <S.StyledImage src={imageSrc} />
        <S.Title>{title}</S.Title>
      </Link>
    </S.CardLayout>
  )
}

export default Card

Card.defaultProps = {
  width: '160px',
  padding: '5px',
  hasBoxShadow: true,
}
