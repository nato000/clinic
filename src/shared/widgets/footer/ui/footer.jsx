import './footer.css'
import uaText from '../../../../text/ua-text.json'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <p className="footer__copyriting">{uaText.footer.copyriting}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
