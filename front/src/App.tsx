import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/AppRouter'
import { ThemeProvider } from './widgets/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
