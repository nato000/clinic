import React, { useEffect, useState } from 'react'
import './style.css'
import { translate } from '../../shared/utils/translator'
import Heading from '../../shared/widgets/heading/ui/heading'
import Services from '../../shared/widgets/services/ui/services'
import AppointmentBtn from '../../shared/widgets/appointment/ui/appointmentBtn'
import HeroSection from '../../shared/widgets/heroSection/ui/heroSection'
import AppButton from '../../shared/widgets/appButton/ui/appButton'
import MapSection from '../../shared/widgets/mapSection/ui/mapSection'
import { Navigate, useNavigate } from 'react-router-dom'

import img1 from '../../shared/assets/images/P1010712.jpg'
import img2 from '../../shared/assets/images/P1010552.jpg'
import img3 from '../../shared/assets/images/P1052319.jpg'

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
        sectionClass="home-page-hero"
      >
        <AppointmentBtn />
        <AppButton text={'Ціна'} onClick={handleHeroBtn} />
      </HeroSection>
      <section className="explanation">
        <div className="container explanation-container">
          <div className="explanation__images">
            <div className="explanation-images__image-wrapper">
              <img
                src={img2}
                alt="clinic image"
                className="explanation-images__image"
              />
            </div>
            <div className="explanation-images__image-wrapper">
              <img
                src={img1}
                alt="clinic image"
                className="explanation-images__image"
              />
            </div>
            <div className="explanation-images__image-wrapper">
              <img
                src={img3}
                alt="clinic image"
                className="explanation-images__image"
              />
            </div>
          </div>
          <div className="explanation-list-wrapper">
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
        </div>
      </section>
      <Services />
      <MapSection />
    </main>
  )
}

export default HomePage
