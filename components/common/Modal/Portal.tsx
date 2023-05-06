import ReactDOM from 'react-dom'

interface PortalProps {
  children: React.ReactNode
}

const Portal = ({ children }: PortalProps) => {
  if (typeof document === 'undefined') return null

  const modalRoot = document.getElementById('modal-root') as HTMLElement
  return ReactDOM.createPortal(children, modalRoot)
}

export default Portal
