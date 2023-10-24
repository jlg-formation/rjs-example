import { sleep } from '../misc'
import { AuthenticationError } from './AuthenticationError'
import { User } from './interfaces/User'

class UserAPI {
  async connect(login: string, password: string): Promise<User> {
    console.log('connect', login, password)
    await sleep(300)
    const response = await fetch('/api/connect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    })
    if (response.status === 401) {
      throw new AuthenticationError()
    }
    if (response.status >= 400) {
      throw new Error('Technical Error')
    }
    const user = await response.json()
    return user
  }

  async disconnect(): Promise<void> {
    try {
      console.log('disconnect')
      await sleep(300)
      const response = await fetch('/api/disconnect', {
        method: 'POST',
      })
      if (response.status >= 400) {
        throw new Error('Technical Error')
      }
    } catch (err) {
      throw new Error('Technical Error')
    }
  }
}

export const userApi = new UserAPI()
