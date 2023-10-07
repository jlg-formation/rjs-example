import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from '../../widgets/Title'
import { NewArticle } from '../interfaces/Article'
import { FormState } from '../interfaces/FormState'
import { useArticleStore } from '../store/ArticleStore'

const validate = (newArticle: NewArticle) => {
  const result = { name: '', price: '', qty: '' }
  if (newArticle.name === '') {
    result.name = 'Champs requis'
  }
  if (newArticle.name.length > 10) {
    result.name = `Trop long (${newArticle.name.length}>10)`
  }
  if (newArticle.price < 0) {
    result.price = 'Prix negatif'
  }
  if (newArticle.qty < 0) {
    result.qty = 'Prix negatif'
  }
  return result
}

const isInvalid = <T extends object>(formState: FormState<T>) => {
  for (const value of Object.values(formState.error)) {
    if (value !== '') {
      return true
    }
  }
  return false
}

const formState: FormState<NewArticle> = {
  value: { name: 'Truc', price: 0, qty: 0 },
  error: { name: '', price: '', qty: '' },
}

const AddView = () => {
  const [form, setForm] = useState(formState)

  const [isAdding, setIsAdding] = useState(false)

  const { add, refresh } = useArticleStore()
  const navigate = useNavigate()

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const newForm = { ...form }
      newForm.value = { ...form.value, [name]: event.target.value }
      newForm.error = validate(newForm.value)
      setForm(newForm)
    }

  const handleSubmit = async (event: FormEvent<HTMLElement>) => {
    try {
      event.preventDefault()
      setIsAdding(true)
      const newArticle: NewArticle = {
        name: form.value.name,
        price: +form.value.price,
        qty: +form.value.qty,
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
          <input
            type="text"
            value={form.value.name}
            onChange={handleChange('name')}
          />
          <span className="error">{form.error.name}</span>
        </label>
        <label>
          <span>Prix</span>
          <input
            type="number"
            value={form.value.price}
            onChange={handleChange('price')}
          />
          <span className="error">{form.error.price}</span>
        </label>
        <label>
          <span>Quantité</span>
          <input
            type="number"
            value={form.value.qty}
            onChange={handleChange('qty')}
          />
          <span className="error">{form.error.qty}</span>
        </label>
        <button className="primary" disabled={isAdding || isInvalid(form)}>
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
