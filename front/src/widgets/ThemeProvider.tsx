import { useEffect, useState } from 'react'
import {
  ThemeContext,
  ThemeValue,
  getInitialTheme,
  setPersistentTheme,
} from '../contexts/ThemeContext'

export const ThemeProvider = (props: {
  children: string | JSX.Element | JSX.Element[]
}) => {
  const [theme, setTheme] = useState<ThemeValue>(getInitialTheme())
  useEffect(() => {
    document.body.classList.remove('dark')
    document.body.classList.remove('light')
    document.body.classList.add(theme)
  })
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: setPersistentTheme(setTheme) }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
