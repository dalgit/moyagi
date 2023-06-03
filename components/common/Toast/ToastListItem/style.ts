import styled, { css } from 'styled-components'
import { ToastStatus } from 'recoil/toast/toastAtom'

export const ToastItemLayout = styled.div<{ type: ToastStatus }>`
  color: white;
  font-size: 15px;
  padding: 15px;
  margin: 5px 0;
  border-radius: 5px;
  text-align: center;
  min-width: 200px;

  ${({ type }) => {
    if (type === 'success') {
      return successStyle
    }

    if (type === 'error') {
      return errorStyle
    }
  }}
`

const successStyle = css`
  background-color: rgba(123, 192, 128, 0.8);
`

const errorStyle = css`
  background-color: rgba(255, 107, 107, 0.8);
`
