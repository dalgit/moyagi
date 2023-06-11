import Link from 'next/link'
import styled from 'styled-components'
import { CHANNEL_PATH, USER_PATH } from 'constants/paths'

interface LinkAttrsProps {
  href: string
}

const ChannelLink = styled(Link).attrs<LinkAttrsProps>(({ href }) => ({
  href: `${CHANNEL_PATH}/${href}`,
}))``

const UserLink = styled(Link).attrs<LinkAttrsProps>(({ href }) => ({
  href: `${USER_PATH}/${href}`,
}))``

export { ChannelLink, UserLink }
