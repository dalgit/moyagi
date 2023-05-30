import styled from 'styled-components'

export const UserNavListLayout = styled.ul`
  background-color: white;
  position: absolute;
  right: 0px;
  top: 35px;
  width: 130px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;

  li {
    text-align: center;

    :hover {
      cursor: pointer;
      color: red;
    }
  }
`
