import { css } from '@emotion/react'
import { useTranslation } from 'react-i18next'

const ToggleLanguage = () => {
  const { i18n } = useTranslation('home')

  const handleToggle = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <button css={s} onClick={handleToggle}>
      {i18n.language}
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
