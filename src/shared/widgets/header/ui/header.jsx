import './header.css'
import uaText from '../../../../text/ua-text.json'
import { translate } from '../../../utils/translator'
import { useState } from 'react'
import logo from '../../../assets/images/Niskhodovski-2.png'
import instagramIcon from '../../../assets/icons/instagramIcon.svg'
import telegramIcon from '../../../assets/icons/telegramIcon.svg'
import DropdownMenu from './dropdown'

export const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuActive((prevState) => !prevState)
  }

  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const handleMouseEnter = () => {
    setDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  }

  const [isDropdownMobileVisible, setDropdownMobileVisible] = useState(false)

  const handleDropdownMobileToggle = () => {
    setDropdownMobileVisible((prevVisible) => !prevVisible)
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header__top">
              <a href="#" className="header-top__logo">
                <img src={logo} alt="logo" className="logo" />
              </a>
              <div className="header-top-socials">
                <a
                  href={`tel:+${uaText.header.top.tel}`}
                  className="header-top__tel"
                >
                  {translate('header.top.tel')}
                </a>
                <button className="header-top__lang">
                  {uaText.header.top.lang}
                </button>
                <a href={instagramIcon} className="header-top__inst">
                  <img
                    src={instagramIcon}
                    alt="instagram"
                    className="header-top-inst__img"
                  />
                </a>
                <a href={telegramIcon} className="header-top__tg">
                  <img
                    src={telegramIcon}
                    alt="telegram"
                    className="header-top-telegram__img"
                  />
                </a>
              </div>
              <button
                className="header-top__burger-menu"
                onClick={toggleMobileMenu}
              >
                burger
              </button>
            </div>
            <div className="header__bottom">
              <div className="header-bottom-desktop">
                <nav className="header-bottom__nav">
                  <ul className="header-bottom-nav__list">
                    <li className="header-bottom-nav-list__item">
                      <a href="#" className="header-bottom-nav-list-item__link">
                        {uaText.header.bottom.nav.option1}
                      </a>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <div
                        className="header-bottom-nav-list__item-menu"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a
                          href="#"
                          className="header-bottom-nav-list-item__link"
                        >
                          {uaText.header.bottom.nav.option2}
                        </a>
                        {isDropdownVisible && <DropdownMenu />}
                      </div>
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
              <div
                className={`header-bottom-mobile ${
                  isMobileMenuActive ? 'header-bottom-mobile--active' : ''
                }`}
              >
                <nav className="header-bottom__nav">
                  <ul className="header-bottom-nav__list">
                    <li className="header-bottom-nav-list__item">
                      <a href="#" className="header-bottom-nav-list-item__link">
                        {uaText.header.bottom.nav.option1}
                      </a>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <div
                        className="header-bottom-nav-list__item-menu"
                        onClick={handleDropdownMobileToggle} // Change to click-based toggle
                      >
                        <a
                          href="#"
                          className="header-bottom-nav-list-item__link"
                        >
                          {uaText.header.bottom.nav.option2}
                        </a>
                        {isDropdownMobileVisible && <DropdownMenu />}
                      </div>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <a href="#" className="header-bottom-nav-list-item__link">
                        {uaText.header.bottom.nav.option3}
                      </a>
                    </li>
                    <li className="header-bottom-nav-list__item"></li>
                    <li className="header-bottom-nav-list__item"></li>
                    <li className="header-bottom-nav-list__item"></li>
                    <li className="header-bottom-nav-list__item"></li>
                  </ul>
                </nav>
                <div className="header-bottom__appointment-section-wrapper">
                  <div className="header-bottom__appointment-section">
                    <button className="header-top__lang">
                      {uaText.header.top.lang}
                    </button>
                    <a
                      href={`tel:+${uaText.header.top.tel}`}
                      className="header-top__tel"
                    >
                      {translate('header.top.tel')}
                    </a>
                    <a
                      href={`${uaText.header.top.inst}`}
                      className="header-top__inst"
                    >
                      <img
                        src={instagramIcon}
                        alt="instagram"
                        className="header-top-inst__img"
                      />
                    </a>
                    <a
                      href={`${uaText.header.top.tg}`}
                      className="header-top__tg"
                    >
                      <img
                        src={telegramIcon}
                        alt="telegram"
                        className="header-top-telegram__img"
                      />
                    </a>
                  </div>
                  <button className="header-bottom__appointment">
                    {uaText.header.bottom.appointment}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
