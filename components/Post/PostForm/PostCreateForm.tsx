import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import { useRef, RefObject } from 'react'
import ReactQuill, { ReactQuillProps } from 'react-quill'
import styled from 'styled-components'
import { useCreatePost } from '@/hooks/mutations/useCreaetePost'
import client from '@/utils/axios/axios'

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

const PostCreateForm = ({ channelId }: { channelId: string }) => {
  const quillRef = useRef<ReactQuill>(null)
  const { mutate: createPostMutate } = useCreatePost(channelId)
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

      await client
        .post('/awsS3/getSignedUrl', { fileName })
        .then(async (res) => {
          const { signedUrl, imageUrl } = res.data
          await client.put(signedUrl, file)

          const editor = quillRef.current?.getEditor()
          const index = editor?.getSelection()?.index || 0
          editor?.insertEmbed(index, 'image', imageUrl)
          editor?.setSelection({ index: index + 1, length: 0 })
          editor?.insertText(index + 1, '\n')
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

  const handleSubmit = async () => {
    const content = quillRef.current?.getEditorContents() as string
    createPostMutate({ channelId, content })
  }

  return (
    <QuillRayout>
      <CustomReactQuill
        forwardedRef={quillRef}
        modules={modules}
        theme="snow"
      />
      <button onClick={handleSubmit}>작성하기</button>
    </QuillRayout>
  )
}

export default PostCreateForm

const QuillRayout = styled.div`
  width: 600px;
  height: 600px;
`
