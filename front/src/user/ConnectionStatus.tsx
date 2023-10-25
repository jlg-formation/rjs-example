import { Link } from 'react-router-dom'
import { User } from './interfaces/User'
import { Translation } from 'react-i18next'

const ConnectionStatus = (props: { user: User | undefined }) => {
  return (
    <Translation>
      {(t) => (
        <div>
          {props.user === undefined ? (
            <Link to="/user/login" className="button">
              {t('Se connecter')}
            </Link>
          ) : (
            <Link to="/user">{props.user.displayName}</Link>
          )}
        </div>
      )}
    </Translation>
  )
}

export default ConnectionStatus
