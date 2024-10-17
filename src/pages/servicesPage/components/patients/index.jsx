import { translate } from '../../../../shared/utils/translator'
import "./style.css";

const Patients = ({images}) => {
  return (
    <section className='services-patients-section'>
      <div className="container">
        <h1>{translate("servicesPage.section.patients")}</h1>
        <div className='images-wrapper'>
        {
          images.map((item, index) => (
            <div className='images-container' key={index}>
              <img src={item} alt='Template' />
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default Patients;
