import { RouteObject } from 'react-router-dom'
import LoginView from './views/LoginView'
import UserView from './views/UserView'
import Authenticated from './Authenticated'

export const userRouterObject = (path: string): RouteObject => {
  return {
    path,
    children: [
      {
        path: '',
        element: (
          <Authenticated>
            <UserView />
          </Authenticated>
        ),
      },
      {
        path: 'login',
        element: <LoginView />,
      },
    ],
  }
}
