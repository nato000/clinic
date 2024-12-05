import PropTypes from 'prop-types'
import './FounderProjects.css'
import Heading from '../../../../shared/widgets/heading/ui/heading'
import { loadImage } from '../../../../shared/utils/loadImage'

const FounderProjects = ({ title, description, img }) => {
  return (
    <>
      <section className="project">
        <div className="container project-container">
          <div className="project-text-wrapper">
            <Heading level={3} text={title} className={'project__title'} />
            <p className="project__description">{description}</p>
          </div>
          <div className="project__image-wrapper">
            <img
              src={loadImage(img)}
              alt="project"
              className="project__image"
            />
          </div>
        </div>
      </section>
    </>
  )
}

FounderProjects.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
}
export default FounderProjects
