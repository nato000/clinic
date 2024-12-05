import PropTypes from 'prop-types'
import './FoundersArticle.css'
import { lazy } from 'react'
// import YouTubeMedia from '../../../../shared/widgets/mediaComponents/YoutubeMedia/YoutubeMedia'
// import InstagramMedia from '../../../../shared/widgets/mediaComponents/InstagramMedia/InstagramMedia'
// import OtherMedia from '../../../../shared/widgets/mediaComponents/OtherMedia/OtherMedia'

const YouTubeMedia = lazy(
  () =>
    import(
      '../../../../shared/widgets/mediaComponents/YoutubeMedia/YoutubeMedia'
    )
)
const InstagramMedia = lazy(
  () =>
    import(
      '../../../../shared/widgets/mediaComponents/InstagramMedia/InstagramMedia'
    )
)
const OtherMedia = lazy(
  () =>
    import('../../../../shared/widgets/mediaComponents/OtherMedia/OtherMedia')
)

const FoundersArticle = ({ media }) => {
  return (
    <>
      {media.map((item, index) => {
        if (item.youtube) {
          return (
            <>
              <div className="container youtube-article-wrapper">
                {item.youtube.map((video, idx) => (
                  <article className="article" key={`${index}-${idx}`}>
                    <YouTubeMedia url={video.url} />{' '}
                  </article>
                ))}
              </div>
            </>
          )
        }
        if (item.instagram) {
          return (
            <>
              <div className="container instagram-article-wrapper">
                {item.instagram.map((post, idx) => (
                  <article className="article" key={`${index}-${idx}`}>
                    <div className="article-container">
                      <div className="article-media-wrapper">
                        <InstagramMedia url={post.url} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )
        }
        if (item.other) {
          return (
            <>
              <div className="container other-article-wrapper">
                {item.other.map((otherItem, idx) => (
                  <article className="article" key={`${index}-${idx}`}>
                    <div className="article-container">
                      <div className="article-media-wrapper">
                        <OtherMedia
                          title={otherItem.title}
                          url={otherItem.url}
                          img={otherItem.img}
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )
        }
        return null
      })}
    </>
  )
}

FoundersArticle.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      youtube: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        })
      ),
      instagram: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        })
      ),
      other: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          img: PropTypes.string,
        })
      ),
    })
  ),
}

export default FoundersArticle
