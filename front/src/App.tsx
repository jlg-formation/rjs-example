import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/AppRouter'
import { UserContext, UserContextType } from './user/UserContext'
import { sleep } from './misc'
import { useState } from 'react'
import { User } from './user/interfaces/User'

function App() {
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
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}

export default App
