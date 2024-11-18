import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './appButton.css'

export const AppButton = ({ text, type, onClick, styleType, style }) => {
  let btnStyle = ''
  if (styleType === 'black') {
    btnStyle = 'app-btn--black'
  }

  return (
    <button
      type={`${type}`}
      className={`app-btn ${btnStyle} ${style ? style : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

AppButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  styleType: PropTypes.string,
  style: PropTypes.string,
}

export default AppButton
