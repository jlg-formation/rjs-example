import { Translation } from 'react-i18next'
import { Link } from 'react-router-dom'
import s from './HeaderLayout.module.scss'
import UtilityLayout from './UtilityLayout'
import logo from '/logo.svg'

const HeaderLayout = () => (
  <Translation>
    {(t) => (
      <header className={s.header}>
        <Link to="/">
          <img src={logo} alt="Logo" />
          <span>{t('Gestion Stock')}</span>
        </Link>
        <UtilityLayout />
      </header>
    )}
  </Translation>
)

export default HeaderLayout
