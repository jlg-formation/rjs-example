import { createBrowserRouter } from 'react-router-dom'
import VerticalLayout from '../layout/VerticalLayout'
import HomeView from './views/HomeView'
import LegalView from './views/LegalView'

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
    ],
  },
])
