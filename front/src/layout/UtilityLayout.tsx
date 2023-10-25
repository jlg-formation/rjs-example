import LanguageSwitch from '../i18n/LanguageSwitch'
import ConnectionStatus from '../user/ConnectionStatus'
import { useUser } from '../user/UserContext'

const UtilityLayout = () => {
  const { user } = useUser()
  return (
    <div className="utilities">
      <ConnectionStatus user={user} />
      <LanguageSwitch />
    </div>
  )
}

export default UtilityLayout
