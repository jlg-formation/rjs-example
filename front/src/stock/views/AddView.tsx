import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, FormEvent, useState, FocusEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  firstError,
  getError,
  getInitialForm,
  isInvalid,
  positive,
  required,
  tooLong,
} from '../../validation/validator'
import { Title } from '../../widgets/Title'
import { NewArticle } from '../interfaces/Article'
import { FormError, FormState } from '../interfaces/FormState'
import { useArticleStore } from '../store/ArticleStore'

const validate = (newArticle: NewArticle): FormError<NewArticle> => ({
  name: firstError(required(newArticle.name), tooLong(newArticle.name)),
  price: positive(newArticle.price),
  qty: positive(newArticle.qty),
})

const AddView = () => {
  const [form, setForm] = useState(
    getInitialForm<NewArticle>({ name: 'Truc', price: 0, qty: 0 }),
  )

  const [isAdding, setIsAdding] = useState(false)

  const { add, refresh } = useArticleStore()
  const navigate = useNavigate()

  const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    const name = event.target.name
    const newForm: FormState<NewArticle> = { ...form }
    newForm.touched = { ...form.touched, [name]: true }
    setForm(newForm)
  }

  const handleChange =
    (isNumber = false) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name
      const newForm: FormState<NewArticle> = { ...form }
      newForm.value = {
        ...form.value,
        [name]: isNumber ? +event.target.value : event.target.value,
      }
      newForm.error = validate(newForm.value)
      setForm(newForm)
    }

  const handleSubmit = async (event: FormEvent<HTMLElement>) => {
    try {
      event.preventDefault()
      setIsAdding(true)
      const newArticle = form.value
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
            name="name"
            type="text"
            value={form.value.name}
            onChange={handleChange()}
            onBlur={handleBlur}
          />
          <span className="error">{getError(form, 'name')}</span>
        </label>
        <label>
          <span>Prix</span>
          <input
            name="price"
            type="number"
            value={form.value.price}
            onChange={handleChange(true)}
            onBlur={handleBlur}
          />
          <span className="error">{getError(form, 'price')}</span>
        </label>
        <label>
          <span>Quantité</span>
          <input
            name="qty"
            type="number"
            value={form.value.qty}
            onChange={handleChange(true)}
            onBlur={handleBlur}
          />
          <span className="error">{getError(form, 'qty')}</span>
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
