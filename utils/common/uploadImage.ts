import { getSignedUrl, uploadToSignedUrl } from 'utils/api/aws'

export const uploadImage = async (file: File): Promise<string> => {
  const { signedUrl, imageUrl } = await getSignedUrl(file.name)
  await uploadToSignedUrl(signedUrl, file)

  return imageUrl
}
