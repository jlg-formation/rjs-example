import { RouteObject } from 'react-router-dom'
import LoginView from './views/LoginView'
import UserView from './views/UserView'

export const userRouterObject = (path: string): RouteObject => {
  return {
    path,
    children: [
      {
        path: '',
        element: <UserView />,
      },
      {
        path: 'login',
        element: <LoginView />,
      },
    ],
  }
}
