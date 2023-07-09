import { viewConfig, ConfigKeys, ConfigOptions } from './config'
import NotificationBox from '../../NotificationBox/NotificationBox'
import type { PropsWithChildren } from 'react'

interface Props<T> {
  data: T[]
  enabled?: boolean
  view: ConfigKeys
}

const ViewBoundary = <T,>({
  data,
  enabled = true,
  view,
  children,
}: PropsWithChildren<Props<T>>) => {
  const options: ConfigOptions = viewConfig[view]

  if (!enabled) {
    return <NotificationBox {...options.noFetch} type="sorry" />
  }

  if (!data.length) {
    return <NotificationBox {...options.noData} type="empty" />
  }

  return <>{children}</>
}

export default ViewBoundary
