export interface NotificationBoxProps {
  title?: string
  description?: string
  type: NotificationType
}

export type NotificationType = 'sorry' | 'empty'

export type NotificationConfigType = { [key: string]: NotificationBoxProps }
