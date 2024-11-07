import { loadImage } from '../../../../shared/utils/loadImage'
import { translate } from '../../../../shared/utils/translator'
import './style.css'

const Patients = ({ images }) => {
  return (
    <section className="services-patients-section">
      <div className="container">
        <h1>{translate('servicesPage.section.patients')}</h1>
        <div className="images-wrapper">
          {images.map((filename, index) => {
            const imageSrc = loadImage(filename)
            return imageSrc ? (
              <div className="images-container" key={index}>
                <img src={imageSrc} alt="Service-related" />
              </div>
            ) : null
          })}
        </div>
      </div>
    </section>
  )
}

export default Patients
