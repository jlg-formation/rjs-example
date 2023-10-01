import logoLight from '/logo.svg'
import logoDark from '/logo-dark.svg'
import s from './HeaderLayout.module.scss'
import { Link } from 'react-router-dom'
import { ThemeSwitch } from '../widgets/ThemeSwitch'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const HeaderLayout = () => {
  const { theme } = useContext(ThemeContext)
  const logo = theme === 'dark' ? logoDark : logoLight
  return (
    <header className={s.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
        <span>Gestion Stock</span>
      </Link>
      <ThemeSwitch />
    </header>
  )
}

export default HeaderLayout
