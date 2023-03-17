import { Link } from 'react-router-dom'

const ListView = () => (
  <main>
    <h1>Liste des articles</h1>
    <div className="content">
      <nav>
        <button>Rafraîchir</button>
        <Link to="add">Ajouter</Link>
        <button>Supprimer</button>
      </nav>
      <table>
        <thead>
          <tr>
            <th className="name">Nom</th>
            <th className="price">Prix</th>
            <th className="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">3.99 €</td>
            <td className="qty">123</td>
          </tr>
          <tr>
            <td className="name">Pelle</td>
            <td className="price">8.00 €</td>
            <td className="qty">50</td>
          </tr>
          <tr>
            <td className="name">Marteau</td>
            <td className="price">5.50 €</td>
            <td className="qty">34</td>
          </tr>
          <tr>
            <td className="name">Rateau</td>
            <td className="price">12.00 €</td>
            <td className="qty">4</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
)

export default ListView
