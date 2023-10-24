import { useState } from 'react'
import { api } from '../stock/api'
import { UserContext, UserContextType } from './UserContext'
import { User } from './interfaces/User'

export const UserProvider = (props: {
  children: string | JSX.Element | JSX.Element[]
}) => {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [referrer, setReferrer] = useState('/')

  const defaultValue: UserContextType = {
    user: user,
    referrer: referrer,
    setReferrer: setReferrer,
    login: async (loginInput: string, password: string) => {
      console.log('password: ', password)
      console.log('je me loggue')
      const user = await api.connect(loginInput, password)
      console.log('ca y est je suis loggué')
      setUser(user)
    },
    logout: async () => {
      console.log('logout...')
      await api.disconnect()
      setUser(undefined)
    },
  }
  return (
    <UserContext.Provider value={defaultValue}>
      {props.children}
    </UserContext.Provider>
  )
}
