import React from 'react'
import PropTypes from 'prop-types'
import './heading.css'

export const Heading = ({ level, text, style, className }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className={`heading ${className}`} style={style}>
      {text}
    </HeadingTag>
  )
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Heading
