import 'react-quill/dist/quill.snow.css'
import { useRef, useMemo } from 'react'
import ReactQuill from 'react-quill'
import { uploadImage } from 'utils/common/uploadImage'

const useQuill = () => {
  const quillRef = useRef<ReactQuill>(null)

  const handleImageChange = async (file: File) => {
    if (file.size > 1 * 1024 * 1024) {
      alert('이미지의 허용 용량은 1MB입니다.')
      return
    }

    const url = await uploadImage(file)
    insertImageToEditor(url)
  }

  const imageHandler = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.style.display = 'none'
    document.body.appendChild(input)
    input.click()
    input.onchange = async () => {
      if (!input.files) return
      const [file] = input.files
      await handleImageChange(file)
      document.body.removeChild(input)
    }
  }

  const insertImageToEditor = (url: string) => {
    const editor = quillRef.current?.getEditor()
    const index = editor?.getSelection()?.index || 0
    editor?.insertEmbed(index, 'image', url)
    editor?.setSelection({ index: index + 1, length: 0 })
    editor?.insertText(index + 1, '\n')
  }

  const modules = useMemo(() => {
    return {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { quillRef, modules }
}

export default useQuill
