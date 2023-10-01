import { RouterProvider } from 'react-router-dom'
import './App.css'
import { ThemeContext, ThemeValue } from './contexts/ThemeContext'
import { router } from './router/AppRouter'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState<ThemeValue>('dark')
  useEffect(() => {
    document.body.classList.remove('dark')
    document.body.classList.remove('light')
    document.body.classList.add(theme)
  })
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
