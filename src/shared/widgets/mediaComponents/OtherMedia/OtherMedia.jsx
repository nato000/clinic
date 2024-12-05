import PropTypes from 'prop-types'
import './OtherMedia.css'
import { loadImagePng } from '../../../utils/loadImage'
import linkIcon from '../../../assets/icons/link.svg'

const OtherMedia = ({ title, url, img }) => (
  <>
    <div className="other-media-wrapper">
      {img ? (
        <img
          src={loadImagePng(img)}
          alt={title}
          className="other-media-image"
        />
      ) : (
        <iframe
          className="other-media"
          src={url}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          scrolling="no"
        ></iframe>
      )}

      <a
        className="other-media-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkIcon} alt="icon" className="other-media-link__icon" />
        {title}
      </a>
    </div>
  </>
)

OtherMedia.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img: PropTypes.string,
}

export default OtherMedia
