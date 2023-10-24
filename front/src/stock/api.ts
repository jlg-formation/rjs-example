import { sleep } from '../misc'
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
}

export const api = new API()
