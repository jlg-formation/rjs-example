import { Dispatch, SetStateAction, createContext } from 'react'

export type ThemeValue = 'light' | 'dark'

export const getInitialTheme = (): ThemeValue => {
  // look on localstorage, or put 'light'
  const str = localStorage.getItem('theme')
  console.log('str: ', str)
  if (str === null || !['light', 'dark'].includes(str)) {
    localStorage.setItem('theme', 'light')
    console.log('return light')
    return 'light'
  }
  console.log(`return ${str}`)
  return str as ThemeValue
}

export const setPersistentTheme = (
  setTheme: Dispatch<SetStateAction<ThemeValue>>,
) => {
  return (value: ThemeValue) => {
    localStorage.setItem('theme', value)
    setTheme(value)
  }
}

export const ThemeContext = createContext<{
  theme: ThemeValue
  setTheme: (theme: ThemeValue) => void
}>({
  theme: getInitialTheme(),
  setTheme: () => {
    //
  },
})
