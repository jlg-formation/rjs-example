import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import home from './namespaces/en/home.json'
import common from './namespaces/en/common.json'
import legal from './namespaces/en/legal.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'Gérer efficacement votre stock !': 'Manage your assets with efficiency!',
      'Voir le stock': 'See your assets',
    },
  },
  fr: {
    translation: {
      'Gérer efficacement votre stock !': 'qqGérer efficacement votre stock !',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

i18n.addResourceBundle('en', 'home', home)
i18n.addResourceBundle('en', 'common', common)
i18n.addResourceBundle('en', 'legal', legal)

export default i18n
