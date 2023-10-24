import { RouteObject } from 'react-router-dom'
import AddView from './views/AddView'
import ListView from './views/ListView'
import Authenticated from '../user/Authenticated'

export const stockRouterObject = (path: string): RouteObject => {
  return {
    path,
    children: [
      {
        path: '',
        element: (
          <Authenticated>
            <ListView />
          </Authenticated>
        ),
      },
      {
        path: 'add',
        element: (
          <Authenticated>
            <AddView />
          </Authenticated>
        ),
      },
    ],
  }
}
