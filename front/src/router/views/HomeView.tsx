import { Link } from 'react-router-dom'

const HomeView = () => (
  <main>
    <h1>Gérer efficacement votre stock !</h1>
    <Link to="/stock" className="button primary">
      Voir le stock
    </Link>
  </main>
)

export default HomeView
