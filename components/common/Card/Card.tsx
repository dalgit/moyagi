import Link from 'next/link'
import * as S from './style'

export interface CardStyle {
  hasBoxShadow?: boolean
}

interface CardProps extends CardStyle {
  href: string
  image: string
  title: string
}

const Card = ({ href, image, title, ...rest }: CardProps) => {
  return (
    <S.CardLayout {...rest}>
      <Link href={href}>
        <S.StyledImage src={image} />
        <S.Title>{title}</S.Title>
      </Link>
    </S.CardLayout>
  )
}

export default Card

Card.defaultProps = {
  hasBoxShadow: true,
}
