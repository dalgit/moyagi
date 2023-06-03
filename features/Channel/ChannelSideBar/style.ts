import styled from 'styled-components'

export const ChannelSideBarLayout = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 0.5px solid #e1e3e7;
  border-radius: 25px;
  height: fit-content;
  background-color: white;

  & > * {
    border: 1px solid #e1e3e7;
    color: gray;
    border-radius: 50%;
    padding: 2px;
    width: 50px;
    height: 50px;

    :hover {
      cursor: pointer;
    }
  }
`
