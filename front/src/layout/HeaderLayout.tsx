import { Link } from 'react-router-dom'
import s from './HeaderLayout.module.scss'
import UtilityLayout from './UtilityLayout'
import logo from '/logo.svg'

const HeaderLayout = () => (
  <header className={s.header}>
    <Link to="/">
      <img src={logo} alt="Logo" />
      <span>Gestion Stock</span>
    </Link>
    <UtilityLayout />
  </header>
)

export default HeaderLayout
