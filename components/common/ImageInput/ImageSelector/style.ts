import styled from 'styled-components'
import { camera } from 'constants/icon'
import ImageInputContainer from '../ImageInputContainer/ImageInputContainer'
import ImagePreviewer from '../ImagePreviewer/ImagePreviewer'

export const StyledContainer = styled(ImageInputContainer)`
  width: 250px;
  gap: 10px;
  position: relative;
  margin: 0 auto;
`

export const StyledPreviewer = styled(ImagePreviewer)`
  border-radius: 50%;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 65px;
    height: 65px;
    background-image: url(${camera});
    background-size: contain;
  }
`
