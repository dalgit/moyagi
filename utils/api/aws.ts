import client from '../axios/axios'

interface GetSignedUrlResult {
  signedUrl: string
  imageUrl: string
}

export const getSignedUrl = async (
  fileName: string,
): Promise<GetSignedUrlResult> =>
  await client.post('/awsS3/getSignedUrl', { fileName }).then((res) => res.data)

export const uploadToSignedUrl = async (
  signedUrl: string,
  file: File,
): Promise<void> => await client.put(signedUrl, file)
