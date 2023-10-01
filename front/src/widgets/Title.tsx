import ReactDOM from 'react-dom'

export const Title = (props: { children: string }) => {
  return (
    <>
      <HeadTitle>{props.children}</HeadTitle>
      <h1>{props.children}</h1>
    </>
  )
}

export const HeadTitle = (props: { children: string }) => {
  const titleElt = document.querySelector('title') as HTMLTitleElement
  return ReactDOM.createPortal(' - ' + props.children, titleElt)
}
