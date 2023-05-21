import { RxReset } from 'react-icons/rx'
import styled from 'styled-components'
import Button from '@/components/common/Button'
import { useSearchChannels } from '@/hooks/queries/useSearchChannels'
import useSearch from './useSearch'

const SearchBar = () => {
  const {
    data: searchedChannels,
    isFetchedAfterMount: isSearched,
    refetch,
    remove,
  } = useSearchChannels(keyword)

  return (
    <SearchBarBox>
      <InputWrapper>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="채널 검색하기"
        />
        {isSearched && <ResetIcon onClick={resetSearchedChannels} size={25} />}
      </InputWrapper>
      <Button onClick={handleSearch}>검색</Button>
    </SearchBarBox>
  )
}

export default SearchBar

const ResetIcon = styled(RxReset)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
const InputWrapper = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  font-size: 16px;

  input {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    border-radius: 5px;

    ::placeholder {
      color: #b5b5b5;
      font-weight: lighter;
    }
  }
`

const SearchBarBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  height: 50px;
  width: 750px;
  max-width: 100%;

  margin: 40px 0;

  button {
    width: 60px;
    height: 50px;
    font-size: 16px;
  }
`
