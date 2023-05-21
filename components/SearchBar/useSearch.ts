import { useState, KeyboardEvent } from 'react'

const useSearch = () => {
  const [keyword, setKeyword] = useState('')

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

  return {
    keyword,
    setKeyword,
    handleSearch,
    handleKeyDown,
    resetSearchedChannels,
  }
}

export default useSearch
