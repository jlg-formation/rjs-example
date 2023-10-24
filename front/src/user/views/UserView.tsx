import { useNavigate } from 'react-router'
import { useUser } from '../UserContext'
import AuthenticationErrorView from './AuthenticationErrorView'

const UserView = () => {
  const navigate = useNavigate()
  const { user, logout } = useUser()
  if (user === undefined) {
    return <AuthenticationErrorView />
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }
  return (
    <main>
      <h1>Hello {user.displayName}</h1>
      <button onClick={handleLogout}>Se déconnecter</button>
    </main>
  )
}

export default UserView
