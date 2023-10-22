import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/theme'
import { ThemeSwitch } from '../widgets/ThemeSwitch'
import s from './HeaderLayout.module.scss'
import logoDark from '/logo-dark.svg'
import logoLight from '/logo.svg'
import ToggleLanguage from '../i18n/ToggleLanguage'

const HeaderLayout = () => {
  const { theme } = useTheme()
  const logo = theme === 'dark' ? logoDark : logoLight
  return (
    <header className={s.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
        <span>Gestion Stock</span>
      </Link>
      <div>
        <ThemeSwitch />
        <ToggleLanguage />
      </div>
    </header>
  )
}

export default HeaderLayout
