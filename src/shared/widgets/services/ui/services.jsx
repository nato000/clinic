import React from 'react'
import './services.css'
import protez from '../../../assets/icons/protezirovanie-w.svg'
import likuvnya from '../../../assets/icons/lechenie-w.svg'
import hirurgia from '../../../assets/icons/hirurgiya-w.svg'
import implantacia from '../../../assets/icons/implantaciya-w.svg'
import ortodontia from '../../../assets/icons/ortodontiya-w.svg'
import vidbiluvnya from '../../../assets/icons/deti-w.svg'
import Heading from '../../heading/ui/heading'
import { translate } from '../../../utils/translator'
import { Link } from 'react-router-dom'

export const Services = () => {
  const servicesObjects = [
    'dentaltreatment',
    'orthodontics',
    'surgery',
    'implantation',
    'prosthetics',
    'teethwhitening',
  ]

  return (
    <section className="services">
      <div className="container services-container">
        <div className="services-left">
          <Heading
            level={2}
            text={translate('services.title')}
            style={{ color: 'white' }}
          />
          <p className="services-left__description">
            {translate('services.description')}
          </p>
        </div>
        <div className="services-right">
          <Link
            to={`/services#${servicesObjects[0]}`}
            className="services-right__service"
          >
            <div className="services-right-service__icon-wrapper">
              <img
                src={likuvnya}
                className="services-right-service__icon"
                alt={translate('services.services.option1')}
              />
            </div>
            {translate('services.services.option1')}
          </Link>
          <Link
            to={`/services#${servicesObjects[1]}`}
            className="services-right__service"
          >
            <div className="services-right-service__icon-wrapper">
              <img
                src={protez}
                className="services-right-service__icon"
                alt={translate('services.services.option2')}
              />
            </div>
            {translate('services.services.option2')}
          </Link>
          <Link
            to={`/services#${servicesObjects[2]}`}
            className="services-right__service"
          >
            <div className="services-right-service__icon-wrapper">
              <img
                src={hirurgia}
                className="services-right-service__icon"
                alt={translate('services.services.option3')}
              />
            </div>
            {translate('services.services.option3')}
          </Link>
          <Link
            to={`/services#${servicesObjects[3]}`}
            className="services-right__service"
          >
            <div className="services-right-service__icon-wrapper">
              <img
                src={implantacia}
                className="services-right-service__icon"
                alt={translate('services.services.option4')}
              />
            </div>
            {translate('services.services.option4')}
          </Link>
          <Link
            to={`/services#${servicesObjects[4]}`}
            className="services-right__service"
          >
            <div className="services-right-service__icon-wrapper">
              <img
                src={ortodontia}
                className="services-right-service__icon"
                alt={translate('services.services.option5')}
              />
            </div>
            {translate('services.services.option5')}
          </Link>
          <Link
            to={`/services#${servicesObjects[5]}`}
            className="services-right__service"
          >
            <div className="services-right-service__icon-wrapper">
              <img
                src={vidbiluvnya}
                className="services-right-service__icon"
                alt={translate('services.services.option6')}
              />
            </div>
            {translate('services.services.option6')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
