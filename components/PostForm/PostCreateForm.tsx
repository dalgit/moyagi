import 'react-quill/dist/quill.snow.css'
import AWS from 'aws-sdk'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const PostCreateForm = () => {
  const REGION = process.env.NEXT_PUBLIC_REGION
  const ACESS_KEY = process.env.NEXT_PUBLIC_ACESS_KEY
  const SECRET_ACESS_KEY = process.env.NEXT_PUBLIC_SECRET_ACESS_KEY
  const BUCKET = process.env.NEXT_PUBLIC_BUCKET

  AWS.config.update({
    region: REGION,
    accessKeyId: ACESS_KEY,
    secretAccessKey: SECRET_ACESS_KEY,
  })

  const s3 = new AWS.S3()

  const imageHandler = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    document.body.appendChild(input)
    input.click()

    input.onchange = async () => {
      const [file] = input.files
      const fileName = file.name

      const params = {
        Bucket: BUCKET,
        Key: 'post-images/' + fileName,
        Body: file,
        ACL: 'public-read',
        ContentType: file.type,
      }

      s3.putObject(params, (err) => {
        if (err) {
          console.error(err)
        } else {
          console.log(`Image uploaded successfully`)
        }
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
