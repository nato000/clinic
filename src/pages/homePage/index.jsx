import React, { useEffect } from 'react'
import './style.css'
import Contacts from '../../shared/widgets/contacts/ui/contacts'
import { translate } from '../../shared/utils/translator'
import Heading from '../../shared/widgets/heading/ui/heading'
import Services from '../../shared/widgets/services/ui/services'
import AppointmentBtn from '../../shared/widgets/appointment/ui/appointmentBtn'
import CustomAccordion from '../../shared/widgets/accordion/ui/accordion'

export const HomePage = () => {
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

  return (
    <main id="home" className="main-content">
      <section className="hero">
        <div className="hero-shading">
          <div className="container">
            <h1 className="hero__title">{translate('homePage.hero.title')}</h1>
            <p className="hero__description">
              {translate('homePage.hero.description')}
            </p>
            <AppointmentBtn />
          </div>
        </div>
      </section>
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
      <section className="map-section">
        <div className="map"></div>
        <div className="container contacts-container">
          <Contacts />
        </div>
      </section>
      {/*  Hero section*/}
      {/*  ReasonsToContact section*/}
      {/*  Services section global*/}
      {/*  Contacts section global*/}
    </main>
  )
}

export default HomePage
