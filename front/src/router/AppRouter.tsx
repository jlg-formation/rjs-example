import { createBrowserRouter } from 'react-router-dom'
import VerticalLayout from '../layout/VerticalLayout'
import { stockRouterObject } from '../stock/StockRouter'
import HomeView from './views/HomeView'
import LegalView from './views/LegalView'
import { userRouterObject } from '../user/UserRouter'

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
        element: <LegalView />,
      },
      stockRouterObject('stock'),
      userRouterObject('user'),
    ],
  },
])
