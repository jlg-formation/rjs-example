import { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import i18n from './i18n'

const ToggleLanguage = () => {
  const [language, setLanguage] = useState('en')

  const handleToggle = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en'
    setLanguage(newLanguage)
  }

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <button css={s} onClick={handleToggle}>
      {language}
    </button>
  )
}

export default ToggleLanguage

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
