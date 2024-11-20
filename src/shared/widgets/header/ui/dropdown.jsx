import React from 'react'
import './dropdown.css'
import { translate } from '../../../utils/translator'
import { Link } from 'react-router-dom'

const DropdownMenu = () => {
  const servicesObjects = [
    {
      title: 'dentaltreatment',
      content: 'header.bottom.nav.option2.option1',
    },
    {
      title: 'orthodontics',
      content: 'header.bottom.nav.option2.option2',
    },
    {
      title: 'surgery',
      content: 'header.bottom.nav.option2.option3',
    },
    {
      title: 'implantation',
      content: 'header.bottom.nav.option2.option4',
    },
    {
      title: 'prosthetics',
      content: 'header.bottom.nav.option2.option5',
    },
    {
      title: 'teethwhitening',
      content: 'header.bottom.nav.option2.option6',
    },
  ]
  return (
    <div className="dropdown-menu">
      <ul className="dropdown-menu-list">
        {servicesObjects.map((item, index) => (
          <li className="dropdown-menu-list-item" key={index}>
            <Link
              to={`/services#${item.title}`}
              className="dropdown-menu-list-item-link"
            >
              {translate(item.content)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropdownMenu
