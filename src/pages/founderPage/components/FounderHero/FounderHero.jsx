import './FounderHero.css'
import { loadImage } from '../../../../shared/utils/loadImage'
import { translate } from '../../../../shared/utils/translator'
import Heading from '../../../../shared/widgets/heading/ui/heading'

const FounderHero = () => {
  return (
    <>
      <section className="founder-hero">
        <div className="container founder-hero-container">
          <div className="founder-hero-text-wrapper">
            <Heading
              level={1}
              text={translate('founderPage.hero.title')}
              className={'founder-hero__title'}
            />
            <p className="founder-hero__description">
              {translate('founderPage.hero.description')}
            </p>
          </div>
          <div className="founder-hero__image-wrapper">
            <img
              src={loadImage(translate('founderPage.hero.img'))}
              alt="founder"
              className="founder-hero__image"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default FounderHero
