import { useState } from 'react'
import { sleep } from '../misc'
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
      await sleep(300)
      console.log('ca y est je suis loggué')
      setUser({ displayName: loginInput })
    },
    logout: async () => {
      console.log('logout...')
      await sleep(300)
      setUser(undefined)
    },
  }
  return (
    <UserContext.Provider value={defaultValue}>
      {props.children}
    </UserContext.Provider>
  )
}
