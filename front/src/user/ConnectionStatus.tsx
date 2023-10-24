import { Link } from 'react-router-dom'
import { User } from './interfaces/User'

const ConnectionStatus = (props: { user: User | undefined }) => {
  return (
    <div>
      {props.user === undefined ? (
        <Link to="/user/login" className="button">
          Se connecter
        </Link>
      ) : (
        <Link to="/user">{props.user.displayName}</Link>
      )}
    </div>
  )
}

export default ConnectionStatus
