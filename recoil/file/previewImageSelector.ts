import { selectorFamily } from 'recoil'
import fileAtom from './fileAtom'

const previewImageSelector = selectorFamily<string | null, string>({
  key: 'previewImageSelector',

  get:
    (key) =>
    ({ get }) => {
      const file = get(fileAtom(key))
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
