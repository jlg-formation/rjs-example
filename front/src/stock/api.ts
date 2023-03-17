import { sleep } from '../misc'
import { Article } from './interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
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
