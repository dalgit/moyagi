import { getPreSignedUrl } from 'utils/api/getPreSignedUrl'
import client from 'utils/axios/client'

export const uploadImage = async (file: File): Promise<string> => {
  const { signedUrl, uploadUrl } = await getPreSignedUrl(file.name)
  await client.put(signedUrl, file)

  return uploadUrl
}
