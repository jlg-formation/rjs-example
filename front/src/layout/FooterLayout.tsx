import { css } from '@emotion/react'
import { TFunction } from 'i18next'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const FooterLayout = ({ t }: { t: TFunction }) => (
  <footer css={s}>
    <Link to="/legal">{t('Mentions Légales')}</Link>
  </footer>
)

export default withTranslation()(FooterLayout)

const s = css`
  height: 3em;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    text-decoration: inherit;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`
