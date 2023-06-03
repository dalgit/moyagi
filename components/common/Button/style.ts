import styled, { css } from 'styled-components'
import { ButtonVariant } from './Button'

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: auto;
  font-size: 14px;

  ${({ variant }) => buttonStyle[variant]}
`

const buttonStyle: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background-color: #007bff;
    color: #fff;
  `,

  secondary: css`
    background-color: '#EEEEEE';
    color: '#868686';
  `,

  sub: css`
    width: 'fit-content';
    background-color: 'inherit';
    font-size: '12px';
    color: 'gray';
    display: 'inline-block';
  `,
}
