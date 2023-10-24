import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useUser } from './UserContext'

const Authenticated = (props: {
  children: string | JSX.Element | JSX.Element[]
}) => {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user === undefined) {
      navigate('/')
    }
  }, [])

  if (user === undefined) {
    return <></>
  }

  return <>{props.children}</>
}

export default Authenticated
