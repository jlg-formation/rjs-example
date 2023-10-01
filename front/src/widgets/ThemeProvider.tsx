import { ThemeContext, ThemeValue } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/theme'

export const ThemeProvider = (props: {
  initial: ThemeValue
  children: string | JSX.Element | JSX.Element[]
}) => {
  const { theme, setTheme } = useTheme(props.initial)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
