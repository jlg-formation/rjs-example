import { useNavigate } from 'react-router'
import { useUser } from '../UserContext'
import Title from '../../widgets/Title'
import { useTranslation } from 'react-i18next'

const UserView = () => {
  const { t } = useTranslation('user')
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
      <Title onlyHead>{t('Information utilisateur')}</Title>
      <h1>
        {t('Bonjour')} {user.displayName}
      </h1>
      <button onClick={handleLogout}>{t('Se déconnecter')}</button>
    </main>
  )
}

export default UserView
