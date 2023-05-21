import { atom, useRecoilState, selector } from 'recoil'
import { useSearchChannels } from '@/hooks/queries/useSearchChannels'

export const keywordState = atom({
  key: 'keywordState',
  default: '',
})

export const isSearchedState = atom({
  key: 'isSearchedState',
  default: false,
})

export const SearchResultsState = selector({
  key: 'filteredSearchResultsState',
  get: ({ get }) => {
    const searchQuery = get(searchQueryState)
    const searchResults = get(searchResultsState)

    if (searchQuery === '') {
      return searchResults
    }

    return searchResults.filter((result) =>
      result.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  },
})
