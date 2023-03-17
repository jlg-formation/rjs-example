import { create } from 'zustand'
import { api } from '../api'
import { Article } from '../interfaces/Article'

export interface ArticleStore {
  articles: Article[]
  hasAlreadyLoaded: boolean
  loadingError: boolean
  refresh: () => Promise<void>
}

export const useArticleStore = create<ArticleStore>((set) => {
  return {
    articles: [],
    hasAlreadyLoaded: false,
    loadingError: false,
    refresh: async () => {
      try {
        console.log('refresh')
        set({ loadingError: false })
        const articles = await api.retrieveAll()
        console.log('articles: ', articles)
        set({ articles: articles, hasAlreadyLoaded: true })
      } catch (err) {
        set({ articles: [], hasAlreadyLoaded: true, loadingError: true })
      }
    },
  }
})
