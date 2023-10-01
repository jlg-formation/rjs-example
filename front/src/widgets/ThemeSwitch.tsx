import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeValue } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/theme'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
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
  background: var(--ddd);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 2.5em;
  border-radius: 100%;

  &:hover {
    background: var(--ccc);
  }
`
