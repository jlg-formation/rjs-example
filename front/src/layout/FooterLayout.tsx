import { css } from '@emotion/react'
import { Translation } from 'react-i18next'
import { Link } from 'react-router-dom'

const FooterLayout = () => (
  <Translation ns="common">
    {(t) => (
      <footer css={s}>
        <Link to="/legal">{t('Mentions Légales')}</Link>
      </footer>
    )}
  </Translation>
)

export default FooterLayout

const s = css`
  height: 3em;
  background-color: var(--eee);
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
