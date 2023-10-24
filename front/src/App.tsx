import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/AppRouter'
import { UserProvider } from './user/UserProvider'

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

export default App
