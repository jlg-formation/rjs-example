import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const FooterLayout = () => (
  <footer css={s}>
    <Link to="/legal">Mentions Légales</Link>
  </footer>
)

export default FooterLayout

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
