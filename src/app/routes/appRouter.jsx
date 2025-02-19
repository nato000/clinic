import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import HomePage from '../../pages/homePage'
import AboutPage from '../../pages/aboutPage'
import PriceListPage from '../../pages/priceListPage'
import ContractPage from '../../pages/contractPage'
import CooperationPage from '../../pages/cooperationPage'
import ServicesMainPage from '../../pages/servicesMainPage'
import ServicesPage from '../../pages/servicesPage'
import ScrollToTop from '../../shared/widgets/scrollToTop/scrollToTop'
import FounderPage from '../../pages/founderPage'

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="servicesHome" element={<ServicesMainPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="pricelist" element={<PriceListPage />} />
          <Route path="contract" element={<ContractPage />} />
          <Route path="cooperation" element={<CooperationPage />} />
          <Route path="founder" element={<FounderPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
