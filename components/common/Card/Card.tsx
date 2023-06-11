import * as S from './style'

export interface CardStyle {
  hasBoxShadow?: boolean
}

interface CardProps extends CardStyle {
  image: string
  title: string
}

const Card = ({ image, title, ...rest }: CardProps) => {
  return (
    <S.CardLayout {...rest}>
      <S.StyledImage src={image} />
      <S.Title>{title}</S.Title>
    </S.CardLayout>
  )
}

export default Card

Card.defaultProps = {
  hasBoxShadow: true,
}
