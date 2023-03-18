import { create } from 'zustand'
import { sleep } from '../../misc'
import { api } from '../api'
import { Article, NewArticle } from '../interfaces/Article'

export interface ArticleStore {
  articles: Article[]
  hasAlreadyLoaded: boolean
  loadingError: boolean
  refresh: () => Promise<void>
  add: (newArticle: NewArticle) => Promise<void>
  remove: (ids: string[]) => Promise<void>
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
    add: async (newArticle: NewArticle) => {
      try {
        console.log('adding newArticle: ', newArticle)
        await api.add(newArticle)
      } catch (err) {
        console.log('err: ', err)
        throw new Error('Technical Error')
      }
    },
    remove: async (ids: string[]) => {
      try {
        await sleep(300)
        await api.remove(ids)
      } catch (err) {
        console.log('err: ', err)
        throw new Error('Technical Error')
      }
    },
  }
})
