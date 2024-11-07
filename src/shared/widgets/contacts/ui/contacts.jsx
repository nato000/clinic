import phoneIcon from '../../../assets/icons/phone-svgrepo-com.svg'
import mailIcon from '../../../assets/icons/mail-svgrepo-com.svg'
import mapPinIcon from '../../../assets/icons/map-pin-svgrepo-com.svg'
import tgIcon from '../../../assets/icons/telegramIcon.svg'
import instIcon from '../../../assets/icons/instagramIcon.svg'
import { translate } from '../../../utils/translator'
import './contacts.css'
import AppointmentBtn from '../../appointment/ui/appointmentBtn'

export const Contacts = () => {
  return (
    <>
      <div id="contacts" className="contacts">
        <h1 className="contacts__title">{translate('contacts.title')}</h1>
        <main className="contacts__content">
          <ul className="contacts-content__list">
            <li className="contacts-content-list__item">
              <a
                href={`tel:+${translate('contacts.phone')}`}
                className="contacts-content-list-item__link"
              >
                <img
                  src={phoneIcon}
                  alt="phoneIcon"
                  className="contacts-content-list-item__icon"
                />
                +{translate('contacts.phone')}
              </a>
            </li>
            <li className="contacts-content-list__item">
              <a
                href={`mailto:${translate('contacts.mail')}`}
                className="contacts-content-list-item__link"
              >
                <img
                  src={mailIcon}
                  alt="mailIcon"
                  className="contacts-content-list-item__icon"
                />
                {translate('contacts.mail')}
              </a>
            </li>
            <li className="contacts-content-list__item">
              <a
                href={`${translate('contacts.adress.link')}`}
                className="contacts-content-list-item__link"
              >
                <img
                  src={mapPinIcon}
                  alt="mapPinIcon"
                  className="contacts-content-list-item__icon"
                />
                {translate('contacts.adress.text')}
              </a>
            </li>
          </ul>
        </main>
        <footer className="contacts__footer">
          <AppointmentBtn />
          <div className="contacts-footer__links">
            <a href="" className="contacts-footer-links__link">
              <img
                src={tgIcon}
                alt="tgIcon"
                className="contacts-footer-links-link__icon"
              />
            </a>
            <a href="" className="contacts-footer-links__link">
              <img
                src={instIcon}
                alt="instIcon"
                className="contacts-footer-links-link__icon"
              />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Contacts
