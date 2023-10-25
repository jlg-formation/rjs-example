import { useTranslation } from 'react-i18next'

const LanguageInfo = ({ language }: { language: string }) => {
  const { t } = useTranslation()
  return <p>{t('Ceci est la version en {{language}}.', { language })}</p>
}

export default LanguageInfo
