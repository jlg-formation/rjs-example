import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../form/form'
import {
  blackList,
  firstError,
  positive,
  required,
  tooLong,
} from '../../validation/validator'
import { Title } from '../../widgets/Title'
import { NewArticle } from '../interfaces/Article'
import { FormError } from '../interfaces/FormState'
import { useArticleStore } from '../store/ArticleStore'
import { Translation } from 'react-i18next'

const validate = (newArticle: NewArticle): FormError<NewArticle> => ({
  name: firstError(required(newArticle.name), tooLong(newArticle.name)),
  price: positive(newArticle.price),
  qty: positive(newArticle.qty),
})

const asyncValidate = async (
  newArticle: NewArticle,
): Promise<FormError<NewArticle>> => {
  console.log('start async validate', newArticle)
  return {
    name: await blackList(['bad', 'hello'])(newArticle.name),
    price: '',
    qty: '',
  }
}

const AddView = () => {
  const { form, handleBlur, handleChange } = useForm<NewArticle>(
    {
      name: 'Truc',
      price: 0,
      qty: 0,
    },
    validate,
    asyncValidate,
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
    <Translation ns={'articles'}>
      {(t) => (
        <main>
          <Title>{t('Ajouter un article')}</Title>
          <form onSubmit={handleSubmit}>
            <label>
              <span>{t('Nom')}</span>
              <input
                name="name"
                type="text"
                value={form.getValue('name')}
                onChange={handleChange()}
                onBlur={handleBlur}
                className={form.getClassnames('name')}
                autoFocus
                onFocus={(event) => event.target.select()}
              />
              <span className="error">{form.getError('name')}</span>
            </label>
            <label>
              <span>{t('Prix')}</span>
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
              <span>{t('Quantité')}</span>
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
              <span>{t('Ajouter')}</span>
            </button>
          </form>
        </main>
      )}
    </Translation>
  )
}

export default AddView
