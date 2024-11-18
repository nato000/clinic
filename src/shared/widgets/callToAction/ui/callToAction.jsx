import { useState } from 'react'
import useTelegramHook from '../../../hooks/useTelegramHook'
import { translate } from '../../../utils/translator'
import ContactFrom from '../../contactForm/ui/contactFrom'
import Heading from '../../heading/ui/heading'
import './callToAction.css'
import PropTypes from 'prop-types'

export const CallToAction = () => {
  const { sendMessage } = useTelegramHook()

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nameError && !phoneError && name && phone) {
      setIsSubmitted(true)
      sendMessage(`${name + ' ' + phone}` + 'Залишив заявку через сайт')
    }
  }

  return (
    <>
      <section className="callToAction-section">
        <div className="container callToAction-container">
          <div className="callToAction__info">
            {/* <h2 className="callToAction-info__title"></h2> */}
            <Heading
              level={2}
              text={translate(`servicesPage.callToAction.title`)}
              style={{ color: 'white' }}
              className={`callToAction-info__title`}
            />
            <p className="callToAction-info__text">
              {translate(`servicesPage.callToAction.text`)}
            </p>
          </div>
          <div className="callToAction__form">
            <ContactFrom formFunc={handleSubmit} />
          </div>
        </div>
      </section>
    </>
  )
}

CallToAction.propTypes = {
  formFunc: PropTypes.func,
  formStyle: PropTypes.string,
}

export default CallToAction
