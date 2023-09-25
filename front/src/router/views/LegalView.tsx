import RepeatHoc from '../../hoc/RepeatHoc'

const RepeatXTimes = RepeatHoc(
  ({ color, index }: { color: string; index: number }) => (
    <>
      <p>This is paragraph number {index}</p>
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

const LegalView = () => (
  <main>
    <h1>Mentions Légales</h1>

    <RepeatXTimes color="green" />
  </main>
)

export default LegalView
