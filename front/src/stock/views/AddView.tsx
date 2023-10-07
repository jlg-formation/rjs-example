import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from '../../widgets/Title'
import { NewArticle } from '../interfaces/Article'
import { useArticleStore } from '../store/ArticleStore'

const AddView = () => {
  const [isAdding, setIsAdding] = useState(false)

  const { add, refresh } = useArticleStore()
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      setIsAdding(true)
      const form = event.target as HTMLFormElement
      const formData = new FormData(form)
      const object = Object.fromEntries(formData.entries())

      const newArticle: NewArticle = {
        name: object.name + '',
        price: +object.price,
        qty: +object.qty,
      }
      await add(newArticle)
      await refresh()
      navigate('..')
    } catch (err) {
      console.log('err: ', err)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <main>
      <Title>Ajouter un article</Title>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nom</span>
          <input name="name" type="text" defaultValue="Truc" />
        </label>
        <label>
          <span>Prix</span>
          <input name="price" type="number" defaultValue={0} />
        </label>
        <label>
          <span>Quantité</span>
          <input name="qty" type="number" defaultValue={0} />
        </label>
        <button className="primary" disabled={isAdding}>
          <FontAwesomeIcon
            icon={isAdding ? 'circle-notch' : 'plus'}
            spin={isAdding}
          />
          <span>Ajouter</span>
        </button>
      </form>
    </main>
  )
}

export default AddView
