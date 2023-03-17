import { create } from 'zustand'
import { api } from '../api'
import { Article } from '../interfaces/Article'

export interface ArticleStore {
  articles: Article[]
  hasAlreadyLoaded: boolean
  refresh: () => Promise<void>
}

export const useArticleStore = create<ArticleStore>((set) => {
  return {
    articles: [],
    hasAlreadyLoaded: false,
    refresh: async () => {
      console.log('refresh')
      const articles = await api.retrieveAll()
      console.log('articles: ', articles)
      set({ articles: articles, hasAlreadyLoaded: true })
    },
  }
})
