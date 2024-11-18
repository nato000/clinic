import React, { useEffect } from 'react'
import './style.css'
import Contacts from '../../shared/widgets/contacts/ui/contacts'
import { translate } from '../../shared/utils/translator'
import Heading from '../../shared/widgets/heading/ui/heading'
import Services from '../../shared/widgets/services/ui/services'
import AppointmentBtn from '../../shared/widgets/appointment/ui/appointmentBtn'
import HeroSection from '../../shared/widgets/heroSection/ui/heroSection'
import AppButton from '../../shared/widgets/appButton/ui/appButton'
import MapSection from '../../shared/widgets/mapSection/ui/mapSection'
import { Navigate, useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate() // Initialize the navigate function

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1) // Get the section ID from the hash
        const element = document.getElementById(sectionId) // Find the element by ID
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }) // Scroll smoothly to the section
        }
      }
    }

    handleHashChange() // Call initially on mount

    window.addEventListener('hashchange', handleHashChange) // Add listener for hash changes
    return () => window.removeEventListener('hashchange', handleHashChange) // Cleanup listener on unmount
  }, [])

  const handleHeroBtn = () => {
    navigate('/pricelist')
  }

  return (
    <main id="home" className="main-content">
      <HeroSection
        title={translate('homePage.hero.title')}
        description={translate('homePage.hero.description')}
      >
        <AppointmentBtn />
        <AppButton text={'Ціна'} onClick={handleHeroBtn} />
      </HeroSection>
      <section className="explanation">
        <div className="container">
          <Heading level={2} text={translate('homePage.explanation.title')} />
          <ul className="explanation__list">
            <li className="explanation-list__item">
              <span className="explanation-list-item__number">
                {translate('homePage.explanation.list.option1.number')}
              </span>
              <div className="explanation-list-item__text">
                <h3 className="explanation-list-item-text__title">
                  {translate('homePage.explanation.list.option1.title')}
                </h3>
                <p className="explanation-list-item-text__description">
                  {translate('homePage.explanation.list.option1.description')}
                </p>
              </div>
            </li>
            <li className="explanation-list__item">
              <span className="explanation-list-item__number">
                {translate('homePage.explanation.list.option2.number')}
              </span>
              <div className="explanation-list-item__text">
                <h3 className="explanation-list-item-text__title">
                  {translate('homePage.explanation.list.option2.title')}
                </h3>
                <p className="explanation-list-item-text__description">
                  {translate('homePage.explanation.list.option2.description')}
                </p>
              </div>
            </li>
            <li className="explanation-list__item">
              <span className="explanation-list-item__number">
                {translate('homePage.explanation.list.option3.number')}
              </span>
              <div className="explanation-list-item__text">
                <h3 className="explanation-list-item-text__title">
                  {translate('homePage.explanation.list.option3.title')}
                </h3>
                <p className="explanation-list-item-text__description">
                  {translate('homePage.explanation.list.option3.description')}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Services />
      <MapSection />
      {/* <section className="map-section">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3125171.733651879!2d25.9160012!3d50.4193434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf88432cf7b7%3A0x9ccd32f19846e611!2sNiskhodovskiy%20Clinic!5e1!3m2!1sru!2sua!4v1731793663259!5m2!1sru!2sua"
            // width="600"
            // height="450"
            className="map__iframe"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container contacts-container">
          <Contacts />
        </div>
      </section> */}
      {/*  Hero section*/}
      {/*  ReasonsToContact section*/}
      {/*  Services section global*/}
      {/*  Contacts section global*/}
    </main>
  )
}

export default HomePage
