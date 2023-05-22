import styled from 'styled-components'

export const PostListItemLayout = styled.div`
  max-width: 550px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f2f3f5;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`
