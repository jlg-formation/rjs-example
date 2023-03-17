import { css } from '@emotion/react'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useArticleStore } from '../store/ArticleStore'

const ListView = () => {
  const { articles, hasAlreadyLoaded, refresh } = useArticleStore()
  useEffect(() => {
    console.log('hasAlreadyLoaded: ', hasAlreadyLoaded)
    if (hasAlreadyLoaded === false) {
      refresh().then(() => {
        console.log('loaded')
      })
    }
  }, [])

  return (
    <main css={s}>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button>Rafraîchir</button>
          <Link to="add" className="button">
            Ajouter
          </Link>
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
            {hasAlreadyLoaded === false && (
              <tr>
                <td colSpan={3}>
                  <div className="loading">
                    <FontAwesomeIcon icon={faCircleNotch} spin={true} />
                    <span>Chargement...</span>
                  </div>
                </td>
              </tr>
            )}
            {articles.map((a) => (
              <tr key={a.id}>
                <td className="name">{a.name}</td>
                <td className="price">{a.price} €</td>
                <td className="qty">{a.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default ListView

const s = css`
  div.content {
    display: flex;
    flex-flow: column;
    gap: 1em;

    nav {
      display: flex;
      gap: 0.3em;
    }
  }

  table {
    .price,
    .qty {
      text-align: right;
    }
  }

  div.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
  }
`
