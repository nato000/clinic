import { Outlet } from 'react-router-dom'
import { Header } from '../../shared/widgets/header'
import { Footer } from '../../shared/widgets/footer'
import './layout.css'

export const Layout = () => {
  return (
    <>
      <div className="layout-wrapper">
        <Header />
        <div className="main-wrapper">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
