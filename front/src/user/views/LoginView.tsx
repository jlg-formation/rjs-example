import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../UserContext'

const LoginView = () => {
  const { login } = useUser()
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      console.log('submit')
      const form = event.target as HTMLFormElement
      const formData = new FormData(form)
      const object = Object.fromEntries(formData.entries()) as {
        login: string
        password: string
      }
      console.log('object: ', object)
      await login(object.login, object.password)
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
          <input type="text" name="login" defaultValue="qqq" />
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
