import Link from 'next/link'
import { useState, KeyboardEvent } from 'react'
import { RxReset } from 'react-icons/rx'
import { TiArrowRightThick as ArrowIcon } from 'react-icons/ti'
import styled from 'styled-components'
import Button from '@/components/common/Ui/Button'
import Card from '@/components/common/Ui/Card'
import { useGetJoinnedChannels } from '@/hooks/queries/useGetJoinnedChannels'
import { useSearchChannels } from '@/hooks/queries/useSearchChannels'

const Home = () => {
  const [keyword, setKeyword] = useState('')

  const { data: channels = [] } = useGetJoinnedChannels()
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
      <CardList>
        {isSearched ? (
          searchedChannels?.map((channel) => (
            <Card
              key={channel._id}
              title={channel.name}
              href={`/channels/${channel.address}`}
              imageSrc="/assets/a.jpg"
            />
          ))
        ) : (
          <>
            {channels?.map((channel) => (
              <Card
                key={channel._id}
                title={channel.name}
                href={`/channels/${channel.address}`}
                imageSrc="/assets/a.jpg"
              />
            ))}
          </>
        )}
      </CardList>
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

const CardList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  grid-gap: 55px;
  justify-items: center;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;

  margin: 20px 60px 20px 0;
`
