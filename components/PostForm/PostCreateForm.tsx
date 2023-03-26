import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRef, RefObject } from 'react'
import ReactQuill, { ReactQuillProps } from 'react-quill'
import styled from 'styled-components'

interface CustomQuillProps extends ReactQuillProps {
  forwardedRef: RefObject<ReactQuill>
}

const CustomReactQuill = dynamic(
  async () => {
    const { default: ReactQuill } = await import('react-quill')
    const CustomQuill = ({ forwardedRef, ...props }: CustomQuillProps) => (
      <ReactQuill ref={forwardedRef} {...props} />
    )
    return CustomQuill
  },
  { ssr: false },
)

const PostCreateForm = () => {
  const quillRef = useRef<ReactQuill>(null)
  const imageHandler = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    document.body.appendChild(input)
    input.click()

    input.onchange = async () => {
      if (!input.files) return
      const [file] = input.files
      const fileName = file.name
      const editorSelection = quillRef.current?.getEditorSelection()

      await axios.post('/api/awsS3/getSignedUrl', { fileName }).then((res) => {
        const url = res.data
        axios.put(url, file)
      })
    }
  }

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['image'],
        [
          { align: [] },
          {
            color: [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              '#bbbbbb',
              '#facccc',
              '#ffebcc',
              '#ffffcc',
              '#cce8cc',
              '#cce0f5',
              '#ebd6ff',
            ],
          },
          { background: [] },
        ],
      ],
      handlers: { image: imageHandler },
    },
  }

  return (
    <QuillRayout>
      <CustomReactQuill
        forwardedRef={quillRef}
        modules={modules}
        theme="snow"
      />
    </QuillRayout>
  )
}

export default PostCreateForm

const QuillRayout = styled.div`
  width: 600px;
  height: 600px;
`