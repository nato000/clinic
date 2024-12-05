import './FounderFollow.css'
import Heading from '../../../../shared/widgets/heading/ui/heading'
import { loadIcon, loadImage } from '../../../../shared/utils/loadImage'
import { translate } from '../../../../shared/utils/translator'

const FounderFollow = () => {
  const socialLinks = translate('founderPage.follow.socials')
  return (
    <>
      <section className="follow">
        <div className="container follow-container">
          <div className="follow-text-wrapper">
            <Heading
              level={2}
              text={translate('founderPage.follow.title')}
              className={'follow__title'}
            />
            <p className="follow__description">
              {translate('founderPage.follow.description')}
            </p>
            <ul className="follow__links-list">
              {socialLinks.map((link, index) => {
                return (
                  <li className="follow-links-list__item" key={index}>
                    <a
                      href={link.url}
                      className="follow-links-list-item__link"
                      target="_blank"
                    >
                      <img
                        src={loadIcon(link.icon)}
                        alt="icon"
                        className="follow-links-list-item-link__img"
                      />
                      <span className="follow-links-list-item-link__text">
                        {link.text}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="follow__image-wrapper">
            <img
              src={loadImage(translate('founderPage.follow.img'))}
              alt="follow"
              className="follow__image"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default FounderFollow
