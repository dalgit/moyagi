import styled from 'styled-components'

export const RegistrationLayout = styled.div<{ status: string }>`
  padding: 10px;
  width: 100%;
  background-color: white;
  border: 0.5px solid rgba(27, 31, 35, 0.15);
  opacity: ${({ status }) => status !== 'pending' && 0.3};

  position: relative;
`

export const Message = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  white-space: pre-wrap;
  word-break: break-all;
`

export const RegistrationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30px minmax(60px, auto) 15px;
  gap: 15px;
  font-size: 11px;
  justify-items: end;
`
