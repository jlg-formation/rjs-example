import { RouterProvider } from 'react-router-dom'
import './App.css'
import { ThemeContext, ThemeValue } from './contexts/ThemeContext'
import { router } from './router/AppRouter'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState<ThemeValue>('dark')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
