import { create } from 'zustand'
import { Article } from '../interfaces/Article'

export interface ArticleStore {
  articles: Article[]
}

export const useArticleStore = create<ArticleStore>(() => ({
  articles: [
    { id: 'a1', name: 'Tournevis', price: 2.99, qty: 11 },
    { id: 'a2', name: 'Marteau', price: 5, qty: 145 },
  ],
}))
