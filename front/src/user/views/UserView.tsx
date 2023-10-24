import { useNavigate } from 'react-router'
import { useUser } from '../UserContext'

const UserView = () => {
  const navigate = useNavigate()
  const { user, logout } = useUser()
  if (user === undefined) {
    throw new Error('user needed')
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
