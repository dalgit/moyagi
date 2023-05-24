import { LiHTMLAttributes, ReactNode } from 'react'
import * as S from './style'

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  right?: ReactNode
}

const ListItem = ({ children, right, ...props }: ListItemProps) => {
  console.log(props)
  return (
    <S.ListItemLayout {...props}>
      {children}
      {right}
    </S.ListItemLayout>
  )
}

export default ListItem
