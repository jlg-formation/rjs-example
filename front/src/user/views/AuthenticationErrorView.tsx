import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const AuthenticationErrorView = () => {
  return (
    <main>
      <h1>Authentification Error</h1>
      <Link className="button primary" to="/">
        <FontAwesomeIcon icon={faHome} />
        <span>{"Aller à l'accueil"}</span>
      </Link>
    </main>
  )
}

export default AuthenticationErrorView
