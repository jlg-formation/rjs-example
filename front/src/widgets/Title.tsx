import { useEffect } from 'react'

const prefix = 'Gestion Stock'

const Title = (props: { children: string; onlyHead?: boolean }) => {
  useEffect(() => {
    document.title = `${prefix}: ${props.children}`
    return () => {
      document.title = prefix
    }
  })
  return <>{props.onlyHead || <h1>{props.children}</h1>}</>
}

export default Title
