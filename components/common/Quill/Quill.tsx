import 'react-quill/dist/quill.snow.css'
import { DynamicQuill } from './DynamicQuill'
import useQuill from './useQuill'

interface QuillProps {
  setContent: React.Dispatch<React.SetStateAction<string>>
}

const Quill = ({ setContent }: QuillProps) => {
  const { quillRef, modules } = useQuill()
  return (
    <DynamicQuill
      onChange={setContent}
      forwardedRef={quillRef}
      modules={modules}
    />
  )
}

export default Quill
