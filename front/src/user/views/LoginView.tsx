import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../UserContext'

const LoginView = () => {
  const { login } = useUser()
  const navigate = useNavigate()

  const [loginInput, setLoginInput] = useState('qqq')
  const [password, setPassword] = useState('xxx')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      console.log('submit')
      await login(loginInput, password)
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
          <input
            type="text"
            name="login"
            onChange={(event) => {
              setLoginInput(event.target.value)
            }}
            defaultValue={loginInput}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            defaultValue={password}
          />
        </label>
        <button className="primary">Se connecter</button>
        <span>
          {loginInput} / {password}
        </span>
      </form>
    </main>
  )
}

export default LoginView
