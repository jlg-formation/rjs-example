import { Navigate } from 'react-router'
import { useUser } from './UserContext'

const Authenticated = (props: {
  children: string | JSX.Element | JSX.Element[]
}) => {
  const { user } = useUser()
  return <>{user ? props.children : <Navigate to="/" replace={true} />}</>
}

export default Authenticated
