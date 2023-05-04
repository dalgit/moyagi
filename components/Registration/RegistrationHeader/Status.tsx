import React from 'react'
import { EStatus } from '@/types/joinRequest'

interface StatusProps {
  status: EStatus
}

const Status = ({ status }: StatusProps) => {
  const statusText = {
    [EStatus.PENDING]: '대기',
    [EStatus.APPROVE]: '승인',
    [EStatus.REJECT]: ' 거절',
  }[status]

  return <span>{statusText}</span>
}

export default Status
