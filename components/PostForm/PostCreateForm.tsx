import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const PostCreateForm = () => {
  const imageHandler = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    document.body.appendChild(input)
    input.click()

    input.onchange = async () => {
      const [file] = input.files
      const fileName = file.name

      await axios
        .post('/api/awsS3/getS3SignedUrl', { fileName })
        .then((res) => {
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
    <TMP>
      <ReactQuill modules={modules} theme="snow" />
    </TMP>
  )
}

export default PostCreateForm

const TMP = styled.div`
  width: 600px;
  height: 600px;
`
