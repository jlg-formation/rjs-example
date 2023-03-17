import logo from '/logo.svg'
import s from './HeaderLayout.module.scss'

const HeaderLayout = () => (
  <header className={s.header}>
    <a href="#">
      <img src={logo} alt="Logo" />
      <span>Gestion Stock</span>
    </a>
  </header>
)

export default HeaderLayout
