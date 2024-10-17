import './header.css'
import {
  currentLanguage,
  setLanguage,
  translate,
} from '../../../utils/translator'
import { useEffect, useState } from 'react'
import logo from '../../../assets/images/Niskhodovski-2.png'
import instagramIcon from '../../../assets/icons/instagramIcon.svg'
import telegramIcon from '../../../assets/icons/telegramIcon.svg'
import DropdownMenu from './dropdown'
import AppointmentBtn from '../../appointment/ui/appointmentBtn'

export const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)
  const [isHamburgerActive, setIsHamburgerActive] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuActive((prevState) => !prevState)
    setIsHamburgerActive((prevState) => !prevState) // Toggle hamburger state
  }

  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const handleMouseEnter = () => {
    setDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  }

  const [isDropdownMobileVisible, setDropdownMobileVisible] = useState(true)

  const handleDropdownMobileToggle = () => {
    setDropdownMobileVisible((prevVisible) => !prevVisible)
  }

  const [language, setCurrentLanguage] = useState(currentLanguage)

  const toggleLanguage = () => {
    const newLanguage = language === 'ua' ? 'en' : 'ua'
    setLanguage(newLanguage) // Update the language in the translation utility
    setCurrentLanguage(newLanguage) // Update the local state
  }

  useEffect(() => {
    if (isHamburgerActive) {
      // Logic to animate the bars when the hamburger menu is active
      const McBar1 = document.querySelector(
        '.header-top__burger-menu b:nth-child(1)'
      )
      const McBar2 = document.querySelector(
        '.header-top__burger-menu b:nth-child(2)'
      )
      const McBar3 = document.querySelector(
        '.header-top__burger-menu b:nth-child(3)'
      )

      if (McBar1 && McBar2 && McBar3) {
        McBar1.style.top = '50%'
        McBar1.style.transform = 'rotate(45deg)'
        McBar3.style.top = '50%'
        McBar3.style.transform = 'rotate(-45deg)'
        McBar2.style.opacity = '0' // Hide the middle bar
      }
    } else {
      // Reset the bars to the original position when not active
      const McBar1 = document.querySelector(
        '.header-top__burger-menu b:nth-child(1)'
      )
      const McBar2 = document.querySelector(
        '.header-top__burger-menu b:nth-child(2)'
      )
      const McBar3 = document.querySelector(
        '.header-top__burger-menu b:nth-child(3)'
      )

      if (McBar1 && McBar2 && McBar3) {
        McBar1.style.top = '0'
        McBar1.style.transform = 'rotate(0deg)'
        McBar3.style.top = '100%'
        McBar3.style.transform = 'rotate(0deg)'
        McBar2.style.opacity = '1' // Show the middle bar
      }
    }
  }, [isHamburgerActive])

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
                  href={`tel:+${translate('header.top.tel')}`}
                  className="header-top__tel"
                >
                  {translate('header.top.tel')}
                </a>
                <button className="header-top__lang" onClick={toggleLanguage}>
                  {language === 'ua' ? 'UA' : 'EN'}
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
                data="hamburger-menu"
                onClick={toggleMobileMenu}
              >
                <b></b>
                <b></b>
                <b></b>
              </button>
            </div>
            <div className="header__bottom">
              <div className="header-bottom-desktop">
                <nav className="header-bottom__nav">
                  <ul className="header-bottom-nav__list">
                    <li className="header-bottom-nav-list__item">
                      <a href="#" className="header-bottom-nav-list-item__link">
                        {translate('header.bottom.nav.option1')}
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
                          {translate('header.bottom.nav.option2.title')}
                        </a>
                        {isDropdownVisible && <DropdownMenu />}
                      </div>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <a href="#" className="header-bottom-nav-list-item__link">
                        {translate('header.bottom.nav.option3')}
                      </a>
                    </li>
                  </ul>
                </nav>

                <AppointmentBtn />
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
                        {translate('header.bottom.nav.option1')}
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
                          {translate('header.bottom.nav.option2.title')}
                        </a>
                        {isDropdownMobileVisible && <DropdownMenu />}
                      </div>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <a href="#" className="header-bottom-nav-list-item__link">
                        {translate('header.bottom.nav.option3')}
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="header-bottom__appointment-section-wrapper">
                  <div className="header-bottom__appointment-section">
                    <button className="header-top__lang">
                      {translate('header.top.lang')}
                    </button>
                    <a
                      href={`tel:+${translate('header.top.tel')}`}
                      className="header-top__tel"
                    >
                      {translate('header.top.tel')}
                    </a>
                    <a
                      href={`${translate('header.top.inst')}`}
                      className="header-top__inst"
                    >
                      <img
                        src={instagramIcon}
                        alt="instagram"
                        className="header-top-inst__img"
                      />
                    </a>
                    <a
                      href={`${translate('header.top.tg')}`}
                      className="header-top__tg"
                    >
                      <img
                        src={telegramIcon}
                        alt="telegram"
                        className="header-top-telegram__img"
                      />
                    </a>
                  </div>

                  <AppointmentBtn />
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
