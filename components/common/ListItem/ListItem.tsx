import { LiHTMLAttributes, ElementType } from 'react'
import * as S from './style'

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  Right: ElementType
}

const ListItem = ({ children, Right, ...props }: ListItemProps) => {
  return (
    <S.ListItemLayout {...props}>
      {children}
      <Right />
    </S.ListItemLayout>
  )
}

export default ListItem
