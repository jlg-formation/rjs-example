import { css } from '@emotion/css'

const FooterLayout = () => (
  <footer className={s}>
    <a href="#">Mentions Légales</a>
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
