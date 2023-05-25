import styled from 'styled-components'
import { cameraIcon } from '@/constants/defaultImage'
import FImage from '../FImage/FImage'

export const ImageSelectorLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  gap: 10px;
  position: relative;

  label {
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    background-color: #7bcfb5;
    color: #fff;
    cursor: pointer;
  }

  input {
    display: none;
  }
`

export const SelectedImage = styled(FImage)`
  width: inherit;
  aspect-ratio: 1/1;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 65px;
    height: 65px;
    background-image: url(${cameraIcon});
    background-size: contain;
  }
`
