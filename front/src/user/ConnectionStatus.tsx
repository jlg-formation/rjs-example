import s from './ConnectionStatus.module.scss'
import { User } from './interfaces/User'

const ConnectionStatus = (props: { user: User | undefined }) => {
  return (
    <div>
      {props.user === undefined ? (
        <button className={s.button}>Se connecter</button>
      ) : (
        <span>{props.user.displayName}</span>
      )}
    </div>
  )
}

export default ConnectionStatus
