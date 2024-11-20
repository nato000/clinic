import React, { useState } from 'react'
import './inputForm.css'
import ContactFrom from '../../contactForm/ui/contactFrom'

const InputForm = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="modal-container">
      <ContactFrom formFunc={handleSubmit} />
    </div>
  )
}

export default InputForm
