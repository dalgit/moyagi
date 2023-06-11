import styled from 'styled-components'

export const NotFoundPageLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;

  & > * {
    width: 150px;
  }
`
