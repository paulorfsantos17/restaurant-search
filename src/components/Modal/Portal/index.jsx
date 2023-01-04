import ReactDOM from 'react-dom'

export const Portal = ({children}) => {
  const portal = document.getElementById('modal-root')

  return ReactDOM.createPortal(children, portal)
}
