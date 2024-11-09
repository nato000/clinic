import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import HomePage from '../../pages/homePage'
import AboutPage from '../../pages/aboutPage'
import ServicesPage from '../../pages/servicesPage'
import PriceListPage from '../../pages/priceListPage'
import ContractPage from '../../pages/contractPage'
import CooperationPage from '../../pages/cooperationPage'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="pricelist" element={<PriceListPage />} />
          <Route path="contract" element={<ContractPage />} />
          <Route path="cooperation" element={<CooperationPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
