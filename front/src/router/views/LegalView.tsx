import { Translation } from 'react-i18next'
import RepeatHoc from '../../hoc/RepeatHoc'
import { useTheme } from '../../hooks/theme'
import { DelayedCoucou } from '../../widgets/DelayedCoucou'
import { Title } from '../../widgets/Title'

const Content = RepeatHoc(
  ({ color, index }: { color: string; index: number }) => (
    <>
      <Translation ns={['legal', 'common']}>
        {(t) => (
          <p>
            {t('Ceci est le paragraphe')} {index}
          </p>
        )}
      </Translation>
      <p style={{ color: color }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem
        quam quia minima velit accusamus earum, sit unde quidem molestiae
        eligendi tempora quos officiis, incidunt at eum nesciunt nostrum est.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        praesentium laudantium optio dolor quas nihil, in cumque dolores.
        Tempora possimus, doloribus repellat recusandae consequuntur dolor a,
        nihil sit eius, quis repudiandae magni. Sapiente cupiditate possimus
        nulla fugit repellendus recusandae, accusantium nobis et quo, tempore
        perspiciatis explicabo? Consequatur distinctio accusamus quos.
      </p>
    </>
  ),
  8,
)

const LegalView = () => {
  const { theme } = useTheme()
  return (
    <Translation ns={['common']}>
      {(t) => (
        <main>
          <Title>{t('Mentions Légales')}</Title>
          <p>{t('Note : ceci est le thème {{theme}}.', { theme })}</p>
          <DelayedCoucou />

          <Content color="green" />
        </main>
      )}
    </Translation>
  )
}

export default LegalView
