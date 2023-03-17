import { Article } from './interfaces/Article'

class API {
  async retrieveAll(): Promise<Article[]> {
    console.log('retrieveAll')

    return [
      { id: 'a1', name: 'Tournevis', price: 2.99, qty: 11 },
      { id: 'a2', name: 'Marteau', price: 5, qty: 145 },
    ]
  }
}

export const api = new API()
