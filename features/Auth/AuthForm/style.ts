import styled from 'styled-components'

export const FormLayout = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  a {
    display: contents;
    text-align: center;
    font-size: 12px;
    color: gray;
  }
  & > * {
    width: 80%;
  }
`

export const Title = styled.span`
  font-size: 45px;
  text-align: center;
`
