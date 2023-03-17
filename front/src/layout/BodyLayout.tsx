import { Component, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

class BodyLayout extends Component {
  override render(): ReactNode {
    return <Outlet />
  }
}

export default BodyLayout
