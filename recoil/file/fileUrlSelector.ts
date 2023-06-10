import { selectorFamily } from 'recoil'
import { uploadImage } from 'utils/common/uploadImage'
import fileSelector from './fileSelector'

const fileUrlSelector = selectorFamily<string | undefined, string>({
  key: 'fileUrlSelector',

  get:
    (key) =>
    async ({ get }) => {
      const file = get(fileSelector(key))

      if (!file) return undefined

      const uploadedFileUrl = await uploadImage(file)
      return uploadedFileUrl
    },
})

export default fileUrlSelector
