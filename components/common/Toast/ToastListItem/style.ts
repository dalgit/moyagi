import styled, { css } from 'styled-components'
import { ToastStatus } from 'recoil/toast/toastAtom'

export const ToastItemLayout = styled.div<{ type: ToastStatus }>`
  color: white;
  background-color: rgba(123, 192, 128, 0.8);
  font-size: 15px;
  padding: 15px;
  margin: 5px 0;
  border-radius: 5px;
  transform: translateX(-50%);

  ${({ type }) => {
    if (type === 'success') successStyle

    if (type === 'error') errorStyle

    return ''
  }}
`

const successStyle = css`
  background-color: rgba(123, 192, 128, 0.8);
`

const errorStyle = css`
  background-color: rgba(255, 107, 107, 0.8);
`
