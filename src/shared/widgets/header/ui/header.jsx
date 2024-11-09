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
import { useLocation, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)
  const [isHamburgerActive, setIsHamburgerActive] = useState(false)
  const location = useLocation() // Hook to track URL changes

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

  useEffect(() => {
    // Close the mobile menu when the URL changes
    if (isMobileMenuActive) {
      setIsMobileMenuActive(false)
      setIsHamburgerActive(false)
    }
  }, [location.pathname])

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header__top">
              <HashLink className="header-top__logo" to={'/#home'}>
                <img src={logo} alt="logo" className="logo" />
              </HashLink>
              <div className="appointment-btn-container">
                <AppointmentBtn />
              </div>
              <div className="header-top-socials">
                <Link
                  to={`tel:+${translate('header.top.tel')}`}
                  className="header-top__tel"
                >
                  {translate('header.top.tel')}
                </Link>
                <button
                  className="header-top__lang"
                  // onClick={toggleLanguage}
                >
                  {language === 'ua' ? 'UA' : 'EN'}
                </button>
                <Link
                  to={translate('header.top.inst')}
                  className="header-top__inst"
                >
                  <img
                    src={instagramIcon}
                    alt="instagram"
                    className="header-top-inst__img"
                  />
                </Link>
                <Link
                  to={translate('header.top.tg')}
                  className="header-top__tg"
                >
                  <img
                    src={telegramIcon}
                    alt="telegram"
                    className="header-top-telegram__img"
                  />
                </Link>
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
                      <Link
                        to="/about"
                        className="header-bottom-nav-list-item__link"
                      >
                        {translate('header.bottom.nav.option1')}
                      </Link>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <div
                        className="header-bottom-nav-list__item-menu"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          to="/services"
                          className="header-bottom-nav-list-item__link"
                        >
                          {translate('header.bottom.nav.option2.title')}
                        </Link>
                        {isDropdownVisible && <DropdownMenu />}
                      </div>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <Link
                        to="/pricelist"
                        className="header-bottom-nav-list-item__link"
                      >
                        {translate('header.bottom.nav.option3')}
                      </Link>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <HashLink
                        to="/#contacts"
                        className="header-bottom-nav-list-item__link"
                      >
                        {translate('header.bottom.nav.option4')}
                      </HashLink>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <Link
                        to="/cooperation"
                        className="header-bottom-nav-list-item__link"
                      >
                        {translate('header.bottom.nav.option5')}
                      </Link>
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
                      <Link
                        to="/about"
                        className="header-bottom-nav-list-item__link"
                      >
                        {translate('header.bottom.nav.option1')}
                      </Link>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <div
                        className="header-bottom-nav-list__item-menu"
                        onClick={handleDropdownMobileToggle} // Change to click-based toggle
                      >
                        <Link
                          to="/services"
                          className="header-bottom-nav-list-item__link"
                        >
                          {translate('header.bottom.nav.option2.title')}
                        </Link>
                        {isDropdownMobileVisible && <DropdownMenu />}
                      </div>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <Link
                        to="pricelist"
                        className="header-bottom-nav-list-item__link"
                      >
                        {translate('header.bottom.nav.option3')}
                      </Link>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <HashLink
                        to="/#contacts"
                        className="header-bottom-nav-list-item__link"
                      >
                        {translate('header.bottom.nav.option4')}
                      </HashLink>
                    </li>
                    <li className="header-bottom-nav-list__item">
                      <Link
                        to="/cooperation"
                        className="header-bottom-nav-list-item__link"
                      >
                        {translate('header.bottom.nav.option5')}
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="header-bottom__appointment-section-wrapper">
                  <div className="header-bottom__appointment-section">
                    <button className="header-top__lang">
                      {translate('header.top.lang')}
                    </button>
                    <Link
                      to={`tel:+${translate('header.top.tel')}`}
                      className="header-top__tel"
                    >
                      {translate('header.top.tel')}
                    </Link>
                    <Link
                      to={`${translate('header.top.inst')}`}
                      className="header-top__inst"
                    >
                      <img
                        src={instagramIcon}
                        alt="instagram"
                        className="header-top-inst__img"
                      />
                    </Link>
                    <Link
                      to={`${translate('header.top.tg')}`}
                      className="header-top__tg"
                    >
                      <img
                        src={telegramIcon}
                        alt="telegram"
                        className="header-top-telegram__img"
                      />
                    </Link>
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
