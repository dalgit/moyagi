import Link from 'next/link'
import { useState, KeyboardEvent, Suspense } from 'react'
import { RxReset } from 'react-icons/rx'
import { TiArrowRightThick as ArrowIcon } from 'react-icons/ti'
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from 'recoil'
import styled from 'styled-components'
import {
  MyChannelCards,
  ChannelCards,
} from '@/components/Channel/ChannelCards/ChannelCards'
import Button from '@/components/common/Button'
import Spinner from '@/components/common/Spinner'
import { useSearchChannels } from '@/hooks/queries/useSearchChannels'
import { keywordState } from '@/recoil/modal'
const Home = () => {
  // const [keyword, setKeyword] = useState('')
  const [keyword, setKeyword] = useRecoilState(keywordState)
  const resetKeword = useResetRecoilState(keywordState)

  const {
    data: searchedChannels,
    isFetchedAfterMount: isSearched,
    refetch: handleSearch,
  } = useSearchChannels(keyword)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
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
          {isSearched && <ResetIcon onClick={resetKeword} size={25} />}
        </InputWrapper>
        <Button onClick={() => handleSearch()}>검색</Button>
      </SearchBarBox>
      <StyledLink href="/create-channel">
        채널 만들기 <ArrowIcon />
      </StyledLink>
      <Suspense fallback={<Spinner />}>
        {isSearched ? (
          <ChannelCards channels={searchedChannels} />
        ) : (
          <MyChannelCards />
        )}
      </Suspense>
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
