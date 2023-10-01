import { createContext } from 'react'

export type ThemeValue = 'light' | 'dark'

export const ThemeContext = createContext<{
  theme: ThemeValue
  setTheme: (theme: ThemeValue) => void
}>({
  theme: 'light',
  setTheme: () => {
    //
  },
})
