import Link from 'next/link'
import { useState, KeyboardEvent } from 'react'
import { RxReset } from 'react-icons/rx'
import { TiArrowRightThick as ArrowIcon } from 'react-icons/ti'
import styled from 'styled-components'
import JoinnedChannelCards from '@/components/Channel/JoinnedChannelCards'
import Button from '@/components/common/Button'
import { useMyChannels } from '@/hooks/queries/useMyChannels'
import { useSearchChannels } from '@/hooks/queries/useSearchChannels'

const Home = () => {
  const [keyword, setKeyword] = useState('')

  const { data: channels = [] } = useMyChannels()
  const {
    data: searchedChannels,
    isFetchedAfterMount: isSearched,
    refetch,
    remove,
  } = useSearchChannels(keyword)

  const handleSearch = () => {
    refetch()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') refetch()
  }

  const resetSearchedChannels = () => {
    remove()
    setKeyword('')
  }

  return (
    <HomeLayout>
      <SearchBarBox>
        <InputWrapper>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="채널 검색하기"
          />
          {isSearched && (
            <ResetIcon onClick={resetSearchedChannels} size={25} />
          )}
        </InputWrapper>
        <Button onClick={handleSearch}>검색</Button>
      </SearchBarBox>
      <StyledLink href="/create-channel">
        채널 만들기 <ArrowIcon />
      </StyledLink>
      <JoinnedChannelCards
        channels={isSearched ? searchedChannels : channels}
      />
    </HomeLayout>
  )
}

export default Home

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

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;

  margin: 20px 60px 20px 0;
`
