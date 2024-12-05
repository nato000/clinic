import PropTypes from 'prop-types'
import './YouTubeMedia.css'

const YouTubeMedia = ({ url }) => (
  <iframe
    className="youtube-media"
    src={url}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    loading="lazy"
    scrolling="no"
  ></iframe>
)

YouTubeMedia.propTypes = {
  url: PropTypes.string.isRequired,
}

export default YouTubeMedia
