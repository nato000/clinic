import './header.css'
import uaText from '../../../../text/ua-text.json'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header__top">
              <a href="#" className="header-top__logo">
                <img src="" alt="logo" className="logo" />
              </a>
              <a
                href={`tel:+${uaText.header.top.tel}`}
                className="header-top__tel"
              >
                {uaText.header.top.tel}
              </a>
              <button className="header-top__lang">
                {uaText.header.top.lang}
              </button>
              <a
                href={`${uaText.header.top.inst}`}
                className="header-top__inst"
              >
                {uaText.header.top.inst}
              </a>
              <a href={`${uaText.header.top.tg}`} className="header-top__tg">
                {uaText.header.top.tg}
              </a>
            </div>
            <div className="header__bottom">
              <nav className="header-bottom__nav">
                <ul className="header-bottom-nav__list">
                  <li className="header-bottom-nav-list__item">
                    <a href="#" className="header-bottom-nav-list-item__link">
                      {uaText.header.bottom.nav.option1}
                    </a>
                  </li>
                  <li className="header-bottom-nav-list__item">
                    <a href="#" className="header-bottom-nav-list-item__link">
                      {uaText.header.bottom.nav.option2}
                    </a>
                  </li>
                  <li className="header-bottom-nav-list__item">
                    <a href="#" className="header-bottom-nav-list-item__link">
                      {uaText.header.bottom.nav.option3}
                    </a>
                  </li>
                </ul>
              </nav>
              <button className="header-bottom__appointment">
                {uaText.header.bottom.appointment}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
