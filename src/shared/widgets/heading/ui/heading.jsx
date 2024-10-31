import React from 'react'
import PropTypes from 'prop-types'
import './heading.css'

export const Heading = ({ level, text, style }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className={'heading'} style={style}>
      {text}
    </HeadingTag>
  )
}

Heading.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
}



export default Heading
