import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ThemeContext, ThemeValue } from '../contexts/ThemeContext'
import { css } from '@emotion/react'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const icon = theme === 'dark' ? 'sun' : 'moon'

  const handleClick = () => {
    const newTheme: ThemeValue = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div css={s} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

const s = css`
  cursor: pointer;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 2.5em;
  border-radius: 100%;

  &:hover {
    background: #ccc;
  }
`
