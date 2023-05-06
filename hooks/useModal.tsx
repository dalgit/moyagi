import { useState } from 'react'
import ModalFrame from '@/components/common/Modal/ModalFrame'

const useModal = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false)

  const handleModal = () => {
    setIsModalActive(!isModalActive)
  }

  const Modal = () => {
    return (
      <ModalFrame>
        <div>핳하</div>
      </ModalFrame>
    )
  }
  return 'a'
}

export default useModal
