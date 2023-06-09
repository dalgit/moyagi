import { useState, useEffect, ReactNode } from 'react'
import * as S from './style'

interface InfiniteListProps {
  items: ReactNode[]
}

const InfiniteList = ({ items }: InfiniteListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 4000)

    return () => {
      clearInterval(timer)
    }
  }, [items])

  return (
    <S.InfiniteListLayout>
      {items.map((item, index) => (
        <S.ItemLayout
          key={index}
          isInitial={currentIndex === 0}
          isActive={index === currentIndex % items.length}
        >
          {item}
        </S.ItemLayout>
      ))}
    </S.InfiniteListLayout>
  )
}

export default InfiniteList
