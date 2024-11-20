import { loadImage } from '../../../utils/loadImage'
import { translate } from '../../../utils/translator'
import './doctorsSection.css'
import emptyImage from '../../../assets/icons/no-image.svg'
import Heading from '../../heading/ui/heading'

export const DoctorsSection = () => {
  const doctorsData = translate('doctorsSection.doctors')

  return (
    <>
      <section className="doctors-section">
        <div className="container doctors-section-container">
          <Heading
            level={2}
            text={translate('doctorsSection.title')}
            className="doctors-section-title"
          />
          <div className="doctors-grid-wrapper">
            <div className="doctors-grid">
              {doctorsData.map((doctor, index) => {
                const imageSrc = loadImage(doctor.image)
                return (
                  <div key={index} className="doctor-card">
                    <div className="doctor-card__image-wrapper">
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={doctor.name}
                          className="doctor-card-image"
                        />
                      ) : (
                        <img
                          src={emptyImage}
                          alt={doctor.name}
                          className="doctor-card-image"
                        />
                      )}
                    </div>
                    <div className="doctor-card-info">
                      <h3 className="doctor-card-name">
                        {`${doctor.name} ${doctor.surname}`}
                      </h3>
                      <p className="doctor-card-specialization">
                        {doctor.position}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DoctorsSection
