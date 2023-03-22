import styled from 'styled-components'
import Portal from './Portal'

interface ModalFrameProps {
  children: React.ReactNode
  isModalOpen: boolean
  closeModal: () => void
}

const ModalFrame = ({ children, isModalOpen, closeModal }: ModalFrameProps) => {
  return (
    <Portal>
      {isModalOpen && (
        <>
          <Blur onClick={closeModal} />
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </>
      )}
    </Portal>
  )
}

export default ModalFrame

const Blur = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
`

const ChildrenWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`
