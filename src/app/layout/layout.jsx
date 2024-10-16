import { Outlet } from 'react-router-dom'
import { Header } from '../../shared/widgets/header'
import { Footer } from '../../shared/widgets/footer'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
