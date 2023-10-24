import { sleep } from '../misc'
import { AuthenticationError } from '../user/AuthenticationError'
import { User } from '../user/interfaces/User'
import { Article, NewArticle } from './interfaces/Article'

const url = '/api/articles'

class API {
  async add(newArticle: NewArticle) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    })
    if (response.status >= 400) {
      throw new Error('Technical Error')
    }
  }

  async remove(ids: string[]) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ids),
    })
    if (response.status >= 400) {
      throw new Error('Technical Error')
    }
  }

  async retrieveAll(): Promise<Article[]> {
    console.log('retrieveAll')
    await sleep(300)
    const response = await fetch(url)
    if (response.status >= 400) {
      throw new Error('Technical Error')
    }
    const articles: Article[] = await response.json()
    return articles
  }

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

export const api = new API()
