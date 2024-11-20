import './style.css'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { translate } from '../../shared/utils/translator'
import HeroSection from '../../shared/widgets/heroSection/ui/heroSection'
import AppointmentBtn from '../../shared/widgets/appointment/ui/appointmentBtn'
import AppButton from '../../shared/widgets/appButton/ui/appButton'
import { Services } from '../../shared/widgets/services'
import MapSection from '../../shared/widgets/mapSection/ui/mapSection'
import DoctorsSection from '../../shared/widgets/doctorsSection/ui/doctorsSection'
import CallToAction from '../../shared/widgets/callToAction/ui/callToAction'

// import DetailDescription from './components/detailDescription'

const ServicesMainPage = () => {
  const navigate = useNavigate() // Initialize the navigate function

  const handleHeroBtn = () => {
    navigate('/pricelist')
  }
  return (
    <div className="services-main-page">
      <HeroSection
        title={translate('homePage.hero.title')}
        description={translate('homePage.hero.description')}
      >
        <AppointmentBtn />
        <AppButton text={'Ціна'} onClick={handleHeroBtn} />
      </HeroSection>
      <CallToAction />
      <DoctorsSection />
      <Services />
      <MapSection />
    </div>
  )
}

export default ServicesMainPage
