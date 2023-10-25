import { faCircleNotch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  cleanError,
  first,
  isFormInvalid,
  maxLength,
  minLength,
  required,
} from '../../validation/misc'
import Title from '../../widgets/Title'
import { NewArticle } from '../interfaces/Article'
import { useArticleStore } from '../store/ArticleStore'

const validate = (values: NewArticle) => {
  console.log('start validate: ', values)
  const errors = cleanError({
    name: first(
      required(values.name),
      maxLength(values.name, 10),
      minLength(values.name, 3),
    ),
    price: required(values.price),
    qty: required(values.qty),
  })
  return errors
}

const AddView = () => {
  const [errorMsg, setErrorMsg] = useState('')

  const { add, refresh } = useArticleStore()
  const navigate = useNavigate()

  const newArticle: NewArticle = { name: '', price: 0, qty: 0 }

  return (
    <main>
      <Title>Ajouter un article</Title>
      <Formik
        initialErrors={validate(newArticle)}
        initialValues={newArticle}
        validate={validate}
        onSubmit={async (values, { setSubmitting }) => {
          console.log('submit')

          try {
            setErrorMsg('')
            const newArticle: NewArticle = values
            await add(newArticle)
            await refresh()
            navigate('..')
          } catch (err) {
            console.log('err: ', err)
            setErrorMsg('Erreur Technique')
          } finally {
            setSubmitting(false)
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label>
                <span>Nom</span>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="error">{touched.name && errors.name}</span>
              </label>
              <label>
                <span>Prix</span>
                <input
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="error">{touched.price && errors.price}</span>
              </label>
              <label>
                <span>Quantité</span>
                <input
                  type="number"
                  name="qty"
                  value={values.qty}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="error">{touched.qty && errors.qty}</span>
              </label>
              <div className="error">{errorMsg}</div>
              <button
                type="submit"
                className="primary"
                disabled={isFormInvalid(errors) || isSubmitting}
              >
                <FontAwesomeIcon
                  icon={isSubmitting ? faCircleNotch : faPlus}
                  spin={isSubmitting}
                />
                <span>Ajouter</span>
              </button>
            </form>
          )
        }}
      </Formik>
    </main>
  )
}

export default AddView
