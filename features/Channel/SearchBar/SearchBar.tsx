import { Button } from 'components/common'
import { useSearch } from 'hooks/channel'
import * as S from './style'

const SearchBar = ({ ...rest }) => {
  const {
    keyword,
    setKeyword,
    isSearched,
    handleSearch,
    handleKeyDown,
    handleHomeNavigate,
  } = useSearch()

  return (
    <S.SearchBarLayout {...rest}>
      <S.InputWrapper>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="채널 검색하기"
        />
        {isSearched && <S.ResetIcon onClick={handleHomeNavigate} size={25} />}
      </S.InputWrapper>
      <Button onClick={handleSearch}>검색</Button>
    </S.SearchBarLayout>
  )
}

export default SearchBar
