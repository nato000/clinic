import PropTypes from 'prop-types'
import './heroSection.css'
import { translate } from '../../../utils/translator'
import AppointmentBtn from '../../appointment/ui/appointmentBtn'

export const HeroSection = ({ title, description, children }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-shading">
          <div className="container">
            <h1 className="hero__title">
              {title}
              {/* {translate('homePage.hero.title')} */}
            </h1>
            <p className="hero__description">
              {description}
              {/* {translate('homePage.hero.description')} */}
            </p>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}

HeroSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
}

export default HeroSection
