import { css } from '@emotion/react'
import BodyLayout from './BodyLayout'
import FooterLayout from './FooterLayout'
import HeaderLayout from './HeaderLayout'

const VerticalLayout = () => (
  <div css={style}>
    <HeaderLayout />
    <BodyLayout />
    <FooterLayout />
  </div>
)

export default VerticalLayout

const style = css`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 100vh;
`
