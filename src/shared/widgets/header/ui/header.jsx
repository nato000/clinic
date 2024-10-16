import './header.css'

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
                href={`tel:+`}
                className="header-top__tel"
              >

              </a>

            </div>
            <div className="header__bottom">
              <nav className="header-bottom__nav">
                <ul className="header-bottom-nav__list">
                  <li className="header-bottom-nav-list__item">
                    <a href="#" className="header-bottom-nav-list-item__link">

                    </a>
                  </li>
                  <li className="header-bottom-nav-list__item">
                    <a href="#" className="header-bottom-nav-list-item__link">

                    </a>
                  </li>
                  <li className="header-bottom-nav-list__item">
                    <a href="#" className="header-bottom-nav-list-item__link">

                    </a>
                  </li>
                </ul>
              </nav>
              <button className="header-bottom__appointment">

              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
