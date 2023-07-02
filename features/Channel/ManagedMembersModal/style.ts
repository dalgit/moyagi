import styled from 'styled-components'

export const ManagedMembersModalLayout = styled.ul`
  width: 300px;
  max-height: 350px;
  overflow: auto;

  & > li {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > * {
      width: fit-content;
    }
  }
`
