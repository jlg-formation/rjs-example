import { createContext } from 'react'
import { User } from './interfaces/User'

export interface UserContextType {
  user: User | undefined
  login: (login: string, password: string) => Promise<void>
}

export const UserContext = createContext<UserContextType>({
  user: undefined,
  login: async () => {},
})
