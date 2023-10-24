import { Navigate, useLocation } from 'react-router'
import { useUser } from './UserContext'
import { useEffect } from 'react'

const Authenticated = (props: {
  children: string | JSX.Element | JSX.Element[]
}) => {
  const { user, setReferrer } = useUser()
  const location = useLocation()
  useEffect(() => {
    if (user === undefined) {
      console.log('location: ', location)
      setReferrer(location.pathname)
    }
  }, [])
  return (
    <>{user ? props.children : <Navigate to="/user/login" replace={true} />}</>
  )
}

export default Authenticated
