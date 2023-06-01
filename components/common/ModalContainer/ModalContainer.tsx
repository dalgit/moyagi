import { useRecoilValue } from 'recoil'
import activeModalListAtom from 'recoil/modal/activeModalListAtom'
import MODAL_COMPONENTS from './modalComponents'
import ModalFrame from '../Modal/ModalFrame'

const ModalContainer = () => {
  const activeModalList = useRecoilValue(activeModalListAtom)

  return (
    <>
      {activeModalList.map((modalKey) => {
        const ModalComponent = MODAL_COMPONENTS[modalKey]

        return (
          <ModalFrame key={modalKey} modalKey={modalKey}>
            <ModalComponent />
          </ModalFrame>
        )
      })}
    </>
  )
}

export default ModalContainer
