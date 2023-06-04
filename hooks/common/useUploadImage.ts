import { useRecoilCallback } from 'recoil'
import fileSelector from 'recoil/file/fileSelector'
import fileUrlSelector from 'recoil/file/fileUrlSelector'

const useUploadImage = () => {
  const getFileUrl = useRecoilCallback(
    ({ snapshot }) =>
      (key: string) => {
        removeFile(key)
        return snapshot.getPromise(fileUrlSelector(key))
      },
    [],
  )

  const removeFile = useRecoilCallback(
    ({ reset }) =>
      (key: string) => {
        reset(fileSelector(key))
      },
    [],
  )

  const setFile = useRecoilCallback(
    ({ set }) =>
      (key: string, value: File) => {
        set(fileSelector(key), value)
      },
    [],
  )

  return { getFileUrl, setFile, removeFile }
}

export default useUploadImage
