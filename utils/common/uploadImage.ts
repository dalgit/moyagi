import { getPreSignedUrl } from 'utils/api/getPreSignedUrl'
import client from 'utils/axios/axios'

export const uploadImage = async (file: File): Promise<string> => {
  const { signedUrl, uploadUrl } = await getPreSignedUrl(file.name)
  await client.put(signedUrl, file)

  return uploadUrl
}
