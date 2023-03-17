import { css } from '@emotion/react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const HomeView = () => (
  <main css={s}>
    <h1>Gérer efficacement votre stock !</h1>
    <Link to="/stock" className="button primary">
      <span>Voir le stock</span>
      <FontAwesomeIcon icon={faAngleRight} />
    </Link>
  </main>
)

export default HomeView

const s = css`
  justify-content: center;
`
