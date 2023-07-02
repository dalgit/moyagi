import Link from 'next/link'
import * as S from './style'

export interface CardStyle {
  hasBoxShadow?: boolean
}

interface CardProps extends CardStyle {
  image: string
  title: string
  href: string
}

const Card = ({ image, title, href, ...rest }: CardProps) => {
  return (
    <Link href={href}>
      <S.CardLayout {...rest}>
        <S.StyledImage src={image} />
        <S.Title>{title}</S.Title>
      </S.CardLayout>
    </Link>
  )
}

export default Card

Card.defaultProps = {
  hasBoxShadow: true,
}
