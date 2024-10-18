import React, { useState } from 'react'
import { translate } from '../../../utils/translator'
import './appointmentBtn.css'
import InputForm from './inputForm'

export const AppointmentBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button className="appointment-btn" onClick={handleOpenModal}>
        {translate('header.bottom.appointment')}
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <InputForm />
            {/* Additional form elements can be added here */}
          </div>
        </div>
      )}
    </>
  )
}

export default AppointmentBtn
