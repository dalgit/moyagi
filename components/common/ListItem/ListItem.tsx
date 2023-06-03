import { LiHTMLAttributes, ReactNode } from 'react'
import * as S from './style'

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  right?: ReactNode
}

const ListItem = ({ children, right, ...props }: ListItemProps) => {
  return (
    <S.ListItemLayout {...props}>
      {children}
      {right}
    </S.ListItemLayout>
  )
}

export default ListItem
