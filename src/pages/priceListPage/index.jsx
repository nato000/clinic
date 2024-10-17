import { translate } from '../../shared/utils/translator'
import CustomAccordion from '../../shared/widgets/accordion/ui/accordion'
import Contacts from '../../shared/widgets/contacts/ui/contacts'
import Heading from '../../shared/widgets/heading/ui/heading'
import Services from '../../shared/widgets/services/ui/services'
import './style.css'

const PriceListPage = () => {
  const accordionData = translate('priceListPage.accordion')

  return (
    <main className="main-content">
      <section className="prices">
        <div className="prices-wrapper">
          <div className="container prices-container">
            <Heading
              level={2}
              text={translate('priceListPage.title')}
              style={{ color: 'white' }}
            />
          </div>
        </div>
        <div className="container">
          <div className="prices-accordion">
            <CustomAccordion panels={accordionData} />
          </div>{' '}
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
