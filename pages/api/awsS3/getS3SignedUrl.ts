import AWS from 'aws-sdk'
import { NextApiRequest, NextApiResponse } from 'next'

const getS3SignedUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const { fileName } = req.body

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

  const params = {
    Bucket: BUCKET,
    Key: 'post-images/' + fileName,
    Expires: 120,
    ContentType: 'image/*',
  }

  try {
    const url = await s3.getSignedUrlPromise('putObject', params)
    return res.status(200).json(url)
  } catch (err) {
    console.log(err)
  }
}

export default getS3SignedUrl
