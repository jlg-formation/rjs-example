import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const HomeView = () => (
  <main css={s}>
    <h1>Gérer efficacement votre stock !</h1>
    <Link to="/stock" className="button primary">
      Voir le stock
    </Link>
  </main>
)

export default HomeView

const s = css`
  justify-content: center;
`
