import './style.css'
const Description = ({ title, description, symptoms }) => {
  return (
    <section className="services-description-section">
      <div className="container services-description-section-container">
        <div className="description-wrapper">
          <div className="description-column">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="symptoms-container">
              {symptoms.map((item, index) => (
                <div className="symptom-item" key={index}>
                  <span className="dot">&middot;</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
