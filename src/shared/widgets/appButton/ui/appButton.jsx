import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './appButton.css'

export const AppButton = ({ text, onClick, styleType, style }) => {
  let btnStyle = ''
  if (styleType === 'black') {
    btnStyle = 'app-btn--black'
  }

  return (
    <button
      className={`app-btn ${btnStyle} ${style ? style : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

AppButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  styleType: PropTypes.string,
  style: PropTypes.string,
}

export default AppButton
