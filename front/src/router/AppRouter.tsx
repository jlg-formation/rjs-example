import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import VerticalLayout from '../layout/VerticalLayout'
import { stockRouterObject } from '../stock/StockRouter'
import HomeView from './views/HomeView'
import { sleep } from '../misc'

const LegalView = lazy(() =>
  sleep(2000).then(() => import('./views/LegalView')),
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <VerticalLayout />,
    children: [
      {
        path: '',
        element: <HomeView />,
      },
      {
        path: 'legal',
        element: (
          <Suspense fallback={<main>Loading...</main>}>
            <LegalView />
          </Suspense>
        ),
      },
      stockRouterObject('stock'),
    ],
  },
])
