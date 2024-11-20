import './style.css'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Description from './components/description/description'
import { translate } from '../../shared/utils/translator'
import { Services } from '../../shared/widgets/services'
import Patients from './components/patients'
import HeroSection from '../../shared/widgets/heroSection/ui/heroSection'
import AppointmentBtn from '../../shared/widgets/appointment/ui/appointmentBtn'
import CallToAction from '../../shared/widgets/callToAction/ui/callToAction'
import MapSection from '../../shared/widgets/mapSection/ui/mapSection'
import DoctorsSection from '../../shared/widgets/doctorsSection/ui/doctorsSection'
import ScrollToTop from '../../shared/widgets/scrollToTop/scrollToTop'
import CustomAccordion from '../../shared/widgets/accordion/ui/accordion'
// import DetailDescription from './components/detailDescription'

const services = [
  {
    title: 'dentaltreatment',
    content: 'header.bottom.nav.option2.option1',
    images: ['caries-1', 'caries-2'],
    prices: [
      'Лікування карієсу',
      'Лікування каналів (під мікроскопом)',
      'Перелікування каналів',
    ],
  },
  {
    title: 'orthodontics',
    content: 'header.bottom.nav.option2.option2',
    images: ['composyt'],
    prices: ['Лазерне відбілювання'],
  },
  {
    title: 'surgery',
    content: 'header.bottom.nav.option2.option3',
    images: ['viniry-1', 'viniry-2', 'viniry-3'],
    prices: ['Фотополімерний вінір'],
  },
  {
    title: 'implantation',
    content: 'header.bottom.nav.option2.option4',
    images: ['IMG_4536'],
    prices: ['Дизайн посмішки (MockUp)'],
  },
  {
    title: 'prosthetics',
    content: 'header.bottom.nav.option2.option5',
    images: ['viniry-4'],
    prices: ['Корекція ясен'],
  },
  {
    title: 'teethwhitening',
    content: 'header.bottom.nav.option2.option6',
    images: ['otbel-1', 'otbel-2'],
    prices: ['Консультація'],
  },
]

const ServicesPage = () => {
  const location = useLocation()
  const [currentService, setCurrentService] = useState(null)
  const [accordionData, setAccordionData] = useState([])

  useEffect(() => {
    // Get the hash value from the URL and remove the '#' symbol
    const hashValue = location.hash.replace('#', '')

    // Find the service that matches the title from the hash
    const service = services.find((service) => service.title === hashValue)

    // If no hash or matching service, set the first service as the default
    setCurrentService(service || services[0])
  }, [location])

  useEffect(() => {
    if (currentService) {
      const priceListUnreducted = translate('priceListPage.accordion') || [] // Ensure it's an array
      const priceList = priceListUnreducted[0]?.content // Ensure `content` exists

      if (priceList) {
        const filteredPrices = currentService.prices.reduce(
          (acc, priceName) => {
            if (priceList[priceName]) {
              acc[priceName] = priceList[priceName]
            }
            return acc
          },
          {}
        )

        const formattedData = Object.entries(filteredPrices).map(
          ([key, values]) => ({
            title: key,
            content: values.map((item) => ({
              title: item.title,
              value: item.value,
            })),
          })
        )

        setAccordionData(formattedData)
      }
    }
  }, [currentService])

  return (
    <>
      <main className="services-page-container">
        {currentService ? (
          <>
            <HeroSection
              title={translate(`servicesPage.${currentService.title}.title`)}
              // description={translate('homePage.hero.description')}
            >
              <AppointmentBtn />
            </HeroSection>
            <Description
              title={translate(`servicesPage.${currentService.title}.title`)}
              description={translate(
                `servicesPage.${currentService.title}.description`
              )}
              symptoms={translate(
                `servicesPage.${currentService.title}.symptoms`
              )}
            />

            <section className="price-section">
              <div className="container price-section-container">
                <CustomAccordion panels={accordionData} />
              </div>
            </section>

            <CallToAction />

            {/*  Patients section*/}
            <Patients images={currentService.images} />
            {/*  Questions section*/}
            {/*  Services section global*/}
            <Services />
            {/*<DetailDescription />*/}
            {/* need or not DetailDescription section */}
          </>
        ) : (
          <p>No services available.</p>
        )}
        <DoctorsSection />
        <MapSection />
      </main>
    </>
  )
}

export default ServicesPage
