import dynamic from 'next/dynamic'
import { RefObject } from 'react'
import ReactQuill, { ReactQuillProps } from 'react-quill'

interface CustomQuillProps extends ReactQuillProps {
  forwardedRef: RefObject<ReactQuill>
}

const DynamicQuill = dynamic(
  async () => {
    const { default: ReactQuill } = await import('react-quill')
    const CustomQuill = ({ forwardedRef, ...props }: CustomQuillProps) => (
      <ReactQuill ref={forwardedRef} {...props} />
    )
    return CustomQuill
  },
  { ssr: false },
)

export default DynamicQuill
