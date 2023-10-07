import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../form/form'
import {
  firstError,
  positive,
  required,
  tooLong,
} from '../../validation/validator'
import { Title } from '../../widgets/Title'
import { NewArticle } from '../interfaces/Article'
import { FormError } from '../interfaces/FormState'
import { useArticleStore } from '../store/ArticleStore'

const validate = (newArticle: NewArticle): FormError<NewArticle> => ({
  name: firstError(required(newArticle.name), tooLong(newArticle.name)),
  price: positive(newArticle.price),
  qty: positive(newArticle.qty),
})

const AddView = () => {
  const { form, handleBlur, handleChange } = useForm<NewArticle>(
    {
      name: 'Truc',
      price: 0,
      qty: 0,
    },
    validate,
  )

  const [isAdding, setIsAdding] = useState(false)

  const { add, refresh } = useArticleStore()
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLElement>) => {
    try {
      event.preventDefault()
      setIsAdding(true)
      const newArticle = form.formState.value
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
            value={form.getValue('name')}
            onChange={handleChange()}
            onBlur={handleBlur}
            className={form.getClassnames('name')}
          />
          <span className="error">{form.getError('name')}</span>
        </label>
        <label>
          <span>Prix</span>
          <input
            name="price"
            type="number"
            value={form.getValue('price')}
            onChange={handleChange(true)}
            onBlur={handleBlur}
            className={form.getClassnames('price')}
          />
          <span className="error">{form.getError('price')}</span>
        </label>
        <label>
          <span>Quantité</span>
          <input
            name="qty"
            type="number"
            value={form.getValue('qty')}
            onChange={handleChange(true)}
            onBlur={handleBlur}
            className={form.getClassnames('qty')}
          />
          <span className="error">{form.getError('qty')}</span>
        </label>
        <button className="primary" disabled={isAdding || form.isInvalid()}>
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
