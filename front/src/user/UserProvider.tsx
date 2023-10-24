import { useState } from 'react'
import { sleep } from '../misc'
import { UserContext, UserContextType } from './UserContext'
import { User } from './interfaces/User'

export const UserProvider = (props: {
  children: string | JSX.Element | JSX.Element[]
}) => {
  const [user, setUser] = useState<User | undefined>(undefined)

  const defaultValue: UserContextType = {
    user: user,
    login: async () => {
      console.log('je me loggue')
      await sleep(2000)
      console.log('ca y est je suis loggué')
      setUser({ displayName: 'Eric Durand' })
    },
  }
  return (
    <UserContext.Provider value={defaultValue}>
      {props.children}
    </UserContext.Provider>
  )
}
