import logo from '/logo.svg'
import s from './HeaderLayout.module.scss'
import { Link } from 'react-router-dom'
import { ThemeSwitch } from '../widgets/ThemeSwitch'

const HeaderLayout = () => (
  <header className={s.header}>
    <Link to="/">
      <img src={logo} alt="Logo" />
      <span>Gestion Stock</span>
    </Link>
    <ThemeSwitch />
  </header>
)

export default HeaderLayout
