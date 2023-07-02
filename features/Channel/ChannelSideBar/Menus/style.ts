import styled from 'styled-components'

export const MenusLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 25px;

  & > * {
    width: 100px;
    height: 60px;
    border-radius: 5px;
    padding: 15px;

    border: 1px solid gray;
    background-color: white;
    color: black;
  }
`
