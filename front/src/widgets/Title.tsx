import { createPortal } from 'react-dom'

const HeadTitle = (props: { children: string; onlyHead?: boolean }) => {
  return createPortal(
    ` : ${props.children}`,
    document.querySelector('title') as HTMLElement,
  )
}

const Title = (props: { children: string; onlyHead?: boolean }) => {
  return (
    <>
      <HeadTitle {...props} />
      {props.onlyHead || <h1>{props.children}</h1>}
    </>
  )
}

export default Title
