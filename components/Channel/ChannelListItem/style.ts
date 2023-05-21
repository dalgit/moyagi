import styled from 'styled-components'
import FImage from '@/components/common/FImage'

export const ChannelListItemLayout = styled.div``

export const ChannelImage = styled(FImage)`
  border-radius: 50%;
  min-width: 30px;
  height: 30px;
`

export const Title = styled.div`
  padding: 5px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
