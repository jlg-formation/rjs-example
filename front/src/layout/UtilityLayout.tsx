import ConnectionStatus from '../user/ConnectionStatus'
import { useUser } from '../user/UserContext'

const UtilityLayout = () => {
  const { user } = useUser()
  return (
    <div>
      <ConnectionStatus user={user} />
    </div>
  )
}

export default UtilityLayout
