import React from 'react'
import './mapSection.css'
import Contacts from '../../contacts/ui/contacts'

export const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2566.348275640523!2d30.529507793330637!3d50.41943484795605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf88432cf7b7%3A0x9ccd32f19846e611!2sNiskhodovskiy%20Clinic!5e1!3m2!1sru!2sua!4v1731794397468!5m2!1sru!2sua"
          className="map__iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container contacts-container">
        <Contacts />
      </div>
    </section>
  )
}

export default MapSection
