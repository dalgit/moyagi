import styled from 'styled-components'
import MoreButton from '../../common/MoreButton/MoreButton'
import Image from 'next/image'
import tmp from '/public/assets/tmp.png'

const FeedHeader = () => {
  return (
    <FeadHeaderLayout>
      <Image src={tmp} alt="logo_icon" width={30} height={30} />
      <MoreButton />
    </FeadHeaderLayout>
  )
}

export default FeedHeader

const FeadHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
`
