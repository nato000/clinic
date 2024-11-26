import { translate } from '../../shared/utils/translator'
import CustomAccordion from '../../shared/widgets/accordion/ui/accordion'
import Heading from '../../shared/widgets/heading/ui/heading'
import MapSection from '../../shared/widgets/mapSection/ui/mapSection'
import Services from '../../shared/widgets/services/ui/services'
import './style.css'

const PriceListPage = () => {
  const accordionData = translate('priceListPage.accordion')
  console.log("AccordionData", accordionData);
  return (
    <>
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
            </div>
          </div>
        </section>
        <Services />
        <MapSection />
      </main>
    </>
  )
}

export default PriceListPage
