import { useEffect, useState } from 'react'
import { ThemeValue } from '../contexts/ThemeContext'

export const useTheme = (initialTheme: ThemeValue) => {
  const [theme, setTheme] = useState<ThemeValue>(initialTheme)
  useEffect(() => {
    document.body.classList.remove('dark')
    document.body.classList.remove('light')
    document.body.classList.add(theme)
  })
  return { theme, setTheme }
}
