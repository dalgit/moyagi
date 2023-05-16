import { CSSProperties } from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = () => {
  return <ClipLoader color="#B1B2FF" cssOverride={override} />
}

export default Spinner

const override: CSSProperties = {
  margin: 'auto',
}
