import PropTypes from 'prop-types'
import './InstagramMedia.css'

const InstagramMedia = ({ url }) => (
  <>
    <iframe
      className="instagram-media"
      src={url}
      allowTransparency="true"
      loading="lazy"
      scrolling="no"
    ></iframe>
    <a
      href="https://www.instagram.com/niskhodovskiy_roman/"
      target="_blank"
      className="instagram-tint"
    ></a>
  </>
)

InstagramMedia.propTypes = {
  url: PropTypes.string.isRequired,
}

export default InstagramMedia
