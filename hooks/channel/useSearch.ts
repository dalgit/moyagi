import { useRouter } from 'next/router'
import { useState, KeyboardEvent } from 'react'

const useSearch = () => {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: { keyword },
    })
    setKeyword('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
  }

  const isSearched = router.pathname === '/search'

  return {
    keyword,
    setKeyword,
    isSearched,
    handleSearch,
    handleKeyDown,
  }
}

export default useSearch
