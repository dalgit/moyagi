import { CSSProperties } from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = () => {
  return <ClipLoader color="#B1B2FF" cssOverride={override} />
}

export default Spinner

const override: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}
