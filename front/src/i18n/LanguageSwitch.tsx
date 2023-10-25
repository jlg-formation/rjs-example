import { useState } from 'react'
import i18n from './i18n'

const LanguageSwitch = () => {
  const [language, setLanguage] = useState(i18n.language)

  const handleClick = async (): Promise<void> => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en'
    console.log('newLanguage: ', newLanguage)
    await i18n.changeLanguage(newLanguage)
    setLanguage(i18n.language)
  }

  return (
    <button className="language-switch" onClick={handleClick}>
      {language}
    </button>
  )
}

export default LanguageSwitch
