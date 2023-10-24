import { useContext } from 'react'
import ConnectionStatus from '../user/ConnectionStatus'
import { UserContext } from '../user/UserContext'

const UtilityLayout = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      <ConnectionStatus user={user} />
    </div>
  )
}

export default UtilityLayout
