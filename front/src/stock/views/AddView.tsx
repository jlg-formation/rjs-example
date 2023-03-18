import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { NewArticle } from '../interfaces/Article'
import { useArticleStore } from '../store/ArticleStore'

const handleChange =
  <T,>(setState: Dispatch<SetStateAction<T>>) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value as T)
  }

const AddView = () => {
  const [name, setName] = useState('Truc')
  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0)

  const { add } = useArticleStore()
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLElement>) => {
    try {
      event.preventDefault()
      const newArticle: NewArticle = { name, price, qty }
      await add(newArticle)
      navigate('..')
    } catch (err) {
      console.log('err: ', err)
    }
  }

  return (
    <main>
      <h1>Ajouter un article</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nom</span>
          <input type="text" value={name} onChange={handleChange(setName)} />
        </label>
        <label>
          <span>Prix</span>
          <input
            type="number"
            value={price}
            onChange={handleChange(setPrice)}
          />
        </label>
        <label>
          <span>Quantité</span>
          <input type="number" value={qty} onChange={handleChange(setQty)} />
        </label>
        <button className="primary">
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
      </form>
    </main>
  )
}

export default AddView
