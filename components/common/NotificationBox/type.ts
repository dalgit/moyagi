import { ReactNode } from 'react'

export interface NotificationBoxProps extends NotificationImageProps {
  title?: string
  description?: string
  children?: ReactNode
}

export type NotificationType = 'sorry' | 'empty'

export interface NotificationImageProps {
  type: NotificationType
  alt?: string
}

export type NotificationConfigType = { [key: string]: NotificationBoxProps }
