import React from 'react'
import './dropdown.css'
import { translate } from '../../../utils/translator'

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul className="dropdown-menu-list">
        <li className="dropdown-menu-list-item">
          <a href="" className="dropdown-menu-list-item-link">
            {translate('header.bottom.nav.option2.option1')}
          </a>
        </li>
        <li className="dropdown-menu-list-item">
          <a href="" className="dropdown-menu-list-item-link">
            {translate('header.bottom.nav.option2.option2')}
          </a>
        </li>
        <li className="dropdown-menu-list-item">
          <a href="" className="dropdown-menu-list-item-link">
            {translate('header.bottom.nav.option2.option3')}
          </a>
        </li>
        <li className="dropdown-menu-list-item">
          <a href="" className="dropdown-menu-list-item-link">
            {translate('header.bottom.nav.option2.option4')}
          </a>
        </li>
        <li className="dropdown-menu-list-item">
          <a href="" className="dropdown-menu-list-item-link">
            {translate('header.bottom.nav.option2.option5')}
          </a>
        </li>
        <li className="dropdown-menu-list-item">
          <a href="" className="dropdown-menu-list-item-link">
            {translate('header.bottom.nav.option2.option6')}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default DropdownMenu
