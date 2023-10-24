import { useNavigate } from 'react-router'
import { useUser } from '../UserContext'
import Title from '../../widgets/Title'

const UserView = () => {
  const navigate = useNavigate()
  const { user, logout } = useUser()
  if (user === undefined) {
    throw new Error('oups')
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }
  return (
    <main>
      <Title onlyHead>User info</Title>
      <h1>Hello {user.displayName}</h1>
      <button onClick={handleLogout}>Se déconnecter</button>
    </main>
  )
}

export default UserView
