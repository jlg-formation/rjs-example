import { createContext, useContext } from 'react'
import { User } from './interfaces/User'

export interface UserContextType {
  user: User | undefined
  referrer: string
  setReferrer: (url: string) => void
  login: (login: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const UserContext = createContext<UserContextType>({
  user: undefined,
  referrer: '/',
  setReferrer: () => {},
  login: async () => {},
  logout: async () => {},
})

export const useUser = (): UserContextType => {
  return useContext(UserContext)
}
