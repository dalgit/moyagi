import client from '../axios/client'

interface GetPreSignedUrlResult {
  signedUrl: string
  uploadUrl: string
}

export const getPreSignedUrl = async (
  fileName: string,
): Promise<GetPreSignedUrlResult> =>
  await client.get(`/files/${fileName}/signedUrl`).then((res) => res.data)
