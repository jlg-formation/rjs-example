import { RouteObject } from 'react-router-dom'
import AddView from './views/AddView'
import ListView from './views/ListView'

export const stockRouterObject = (path: string): RouteObject => {
  return {
    path,
    children: [
      {
        path: '',
        element: <ListView />,
      },
      {
        path: 'add',
        element: <AddView />,
      },
    ],
  }
}
