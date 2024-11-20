import { loadImage } from '../../../utils/loadImage'
import { translate } from '../../../utils/translator'
import './doctorsSection.css'
import emptyImage from '../../../assets/icons/no-image.svg'
import Heading from '../../heading/ui/heading'

// {
//             id: "0",
//             name: "Роман",
//             surname: "Нісходовський",
//             fatherName: "",
//             position: "лікар",
//             image: "./media/img_doctor_niskhodovski.jpg"
//         },
//         {
//             id: "1",
//             name: "Денис",
//             surname: "Урос",
//             fatherName: "",
//             position: "лікар",
//             image: "./media/img_doctor_uros.jpg"
//         },
//         {
//             id: "2",
//             name: "Аріна",
//             surname: "Ломова",
//             fatherName: "",
//             position: "лікар",
//             image: "./media/img_doctor_lomova.jpg"
//         },
//         {
//             id: "3",
//             name: "Володимир",
//             surname: "Береговий",
//             fatherName: "",
//             position: "лікар",
//             image: "./media/img_doctor_beregoviy.jpg"
//         },

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
                const imageSrc = loadImage(doctor.imgPath)
                return imageSrc ? (
                  <div key={index} className="doctor-card">
                    <div className="doctor-card__image-wrapper">
                      <img
                        src={imageSrc}
                        alt={doctor.name}
                        className="doctor-card-image"
                      />
                    </div>
                    <div className="doctor-card-info">
                      <h3 className="doctor-card-name">{doctor.name}</h3>
                      <p className="doctor-card-specialization">
                        {doctor.specialization}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="doctor-card">
                    <div className="doctor-card__image-wrapper">
                      <img
                        src={emptyImage}
                        alt={doctor.name}
                        className="doctor-card-image"
                      />
                    </div>
                    <div className="doctor-card-info">
                      <h3 className="doctor-card-name">{doctor.name}</h3>
                      <p className="doctor-card-specialization">
                        {doctor.specialization}
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
