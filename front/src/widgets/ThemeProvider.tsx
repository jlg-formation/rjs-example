import { useEffect, useState } from 'react'
import { ThemeContext, ThemeValue } from '../contexts/ThemeContext'

export const ThemeProvider = (props: {
  initial: ThemeValue
  children: string | JSX.Element | JSX.Element[]
}) => {
  const [theme, setTheme] = useState<ThemeValue>(props.initial)
  useEffect(() => {
    document.body.classList.remove('dark')
    document.body.classList.remove('light')
    document.body.classList.add(theme)
  })
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
