import { Suspense, lazy } from 'react'
import { sleep } from '../misc'

const Coucou = () => <span>😎😎😎</span>

const LazyCoucou = lazy(async () => {
  await sleep(2000)
  return { default: Coucou }
})

export const DelayedCoucou = () => {
  return (
    <Suspense fallback={<span>...😶...</span>}>
      <LazyCoucou />
    </Suspense>
  )
}
