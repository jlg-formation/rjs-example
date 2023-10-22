import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { withTranslation } from 'react-i18next'

const HomeView = ({ t }: { t: (str: string) => string }) => {
  return (
    <main css={s}>
      <h1>{t('Gérer efficacement votre stock !')}</h1>
      <Link to="/stock" className="button primary">
        <span>{t('Voir le stock')}</span>
        <FontAwesomeIcon icon="angle-right" />
      </Link>
    </main>
  )
}

export default withTranslation()(HomeView)

const s = css`
  justify-content: center;
`
