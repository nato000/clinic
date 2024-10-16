import { translate } from '../../../utils/translator'
import './footer.css'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <p className="footer__copyriting">
              {translate('footer.copyriting')}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
