import styled from 'styled-components'
import { hideScrollbar } from 'styles/constants'

export const StyledTextArea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  padding: 10px;
  line-height: 1.5;
  overflow-y: hidden;
  font-size: auto;

  ${hideScrollbar};
`
