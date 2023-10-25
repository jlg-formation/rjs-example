import { useTranslation } from 'react-i18next'
import LanguageInfo from '../../widgets/LanguageInfo'
import Title from '../../widgets/Title'

const LegalView = () => {
  const { t, i18n } = useTranslation('legal')
  return (
    <main>
      <Title>{t('Mentions Légales')}</Title>
      <LanguageInfo language={t(i18n.language)} />
      <p>
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
      <p>
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
      <p>
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
      <p>
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
    </main>
  )
}

export default LegalView
