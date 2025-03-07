import PropTypes from 'prop-types'
import './heroSection.css'

export const HeroSection = ({ title, description, children, sectionClass }) => {
  return (
    <>
      <section className={`hero ${sectionClass ? sectionClass : ''}`}>
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
            <div className="hero__brn-wrapper">{children}</div>
          </div>
        </div>
      </section>
    </>
  )
}

HeroSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  sectionClass: PropTypes.string,
  children: PropTypes.node,
}

export default HeroSection
