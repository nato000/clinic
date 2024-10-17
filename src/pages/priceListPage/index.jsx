import { translate } from '../../shared/utils/translator'
import './style.css'

const PriceListPage = () => {
  return (
    <main className="main-content">
      <section className="prices">
        <Heading level={2} text={translate('homePage.explanation.title')} />
        <div className="prices-accordion">
          <CustomAccordion panels={accordionData} />
        </div>
      </section>
      <Services />
      <section className="map-section">
        <div className="map"></div>
        <div className="container contacts-container">
          <Contacts />
        </div>
      </section>
    </main>
  )
}

export default PriceListPage
