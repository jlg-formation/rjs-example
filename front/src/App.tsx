import { RouterProvider } from 'react-router-dom'
import './App.css'
import { ThemeContext } from './contexts/ThemeContext'
import { useTheme } from './hooks/theme'
import { router } from './router/AppRouter'

function App() {
  const { theme, setTheme } = useTheme('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
