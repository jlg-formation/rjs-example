import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../UserContext'

const LoginView = () => {
  const { login } = useUser()
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      console.log('submit')
      await login('monlogin', 'monpassword')
      navigate('/')
    } catch (err) {
      console.log('err: ', err)
    }
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Login</span>
          <input type="text" name="login" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button className="primary">Se connecter</button>
      </form>
    </main>
  )
}

export default LoginView
