import styled from 'styled-components'

export const ChannelDetailCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f2f3f5;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  gap: 10px;
  width: 180px;
`

export const Description = styled.span`
  font-size: 14px;
  line-height: 1.5;
`

export const Member = styled.span`
  display: flex;
  width: fit-content;
  margin-left: auto;
  font-size: 12px;
  color: gray;
  cursor: pointer;
`
