import { selector } from 'recoil'
import { fileAtom } from './fileAtom'

const previewImageSelector = selector<string | null>({
  key: 'previewImageSelector',

  get: async ({ get }) => {
    const file = get(fileAtom)
    if (!file) return null

    return new Promise<string | null>((resolve) => {
      const reader = new FileReader()

      reader.onload = () => {
        const imageDataURL = reader.result as string
        resolve(imageDataURL)
      }

      reader.onerror = () => {
        resolve(null)
      }

      reader.readAsDataURL(file)
    })
  },
})

export default previewImageSelector
