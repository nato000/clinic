import { translate } from '../../../utils/translator'
import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <p className="footer__copyrighting">
              {translate('footer.copyrighting')}
            </p>
            <p className='footer__offer'>
              <Link to={`/contract?contract=publicOfferContract`}>{translate('footer.offer.publicOfferContract')}</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
