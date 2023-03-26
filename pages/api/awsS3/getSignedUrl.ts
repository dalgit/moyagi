import AWS from 'aws-sdk'
import { NextApiRequest, NextApiResponse } from 'next'
import uuid from 'react-uuid'

const getSignedUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const { fileName } = req.body

  const REGION = process.env.NEXT_PUBLIC_REGION
  const ACESS_KEY = process.env.NEXT_PUBLIC_ACESS_KEY
  const SECRET_ACESS_KEY = process.env.NEXT_PUBLIC_SECRET_ACESS_KEY
  const BUCKET = process.env.NEXT_PUBLIC_BUCKET

  const uniqueKey = uuid()

  AWS.config.update({
    region: REGION,
    accessKeyId: ACESS_KEY,
    secretAccessKey: SECRET_ACESS_KEY,
  })

  const s3 = new AWS.S3()
  const params = {
    Bucket: BUCKET,
    Key: 'post-images/' + uniqueKey + '_' + fileName,
    Expires: 120,
    ContentType: 'image/*',
  }

  const encodedFileName = encodeURIComponent(fileName)

  const imageUrl = `https://${BUCKET}.s3.${REGION}.amazonaws.com/post-images/${uniqueKey}_${encodedFileName}`

  try {
    const signedUrl = await s3.getSignedUrlPromise('putObject', params)
    return res.status(200).json({ signedUrl, imageUrl })
  } catch (err) {
    console.log(err)
  }
}

export default getSignedUrl
