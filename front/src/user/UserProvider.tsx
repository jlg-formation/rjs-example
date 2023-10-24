import { useState } from 'react'
import { UserContext, UserContextType } from './UserContext'
import { User } from './interfaces/User'
import { userApi } from './api'

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
      const user = await userApi.connect(loginInput, password)
      console.log('ca y est je suis loggué')
      setUser(user)
    },
    logout: async () => {
      console.log('logout...')
      await userApi.disconnect()
      setUser(undefined)
    },
  }
  return (
    <UserContext.Provider value={defaultValue}>
      {props.children}
    </UserContext.Provider>
  )
}
