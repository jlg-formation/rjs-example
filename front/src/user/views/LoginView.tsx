import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../UserContext'
import { AuthenticationError } from '../AuthenticationError'
import Title from '../../widgets/Title'

const LoginView = () => {
  const { login, referrer } = useUser()
  const [errorMsg, setErrorMsg] = useState('')

  console.log('referrer: ', referrer)
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      console.log('submit')
      setErrorMsg('')
      const form = event.target as HTMLFormElement
      const formData = new FormData(form)
      const object = Object.fromEntries(formData.entries()) as {
        login: string
        password: string
      }
      console.log('object: ', object)
      await login(object.login, object.password)
      setTimeout(() => {
        navigate(referrer)
      }, 0)
    } catch (err) {
      console.log('err: ', err)
      if (err instanceof AuthenticationError) {
        // affiche erreur
        setErrorMsg('Mauvais login/mot de passe')
      }
    }
  }

  return (
    <main>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Login</span>
          <input type="text" name="login" defaultValue="" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <div className="error">{errorMsg}</div>
        <button className="primary">Se connecter</button>
      </form>
    </main>
  )
}

export default LoginView
