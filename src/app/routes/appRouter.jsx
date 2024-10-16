import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import HomePage from '../../pages/homePage'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<AboutPage />}/> */}
          {/* <Route path="services" element={<ServicesPage />}>
            <Route path=":servicesName" element={<ServicesDetailsPage />} />
          </Route> */}
        </Route>
      </Routes>
    </Router>
  )
}
