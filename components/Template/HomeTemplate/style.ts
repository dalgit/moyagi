import styled from 'styled-components'
import { SearchBar } from 'features/Channel'

export const HomeTemplateLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  height: 100%;
`

export const StyledSearchBar = styled(SearchBar)`
  width: 750px;
`
