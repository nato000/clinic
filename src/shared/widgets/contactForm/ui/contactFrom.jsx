import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './contactFrom.css'
import AppButton from '../../appButton/ui/appButton'
import useTelegramHook from '../../../hooks/useTelegramHook'

export const ContactForm = ({ onSubmitSuccess, formStyle }) => {
  const { sendMessage } = useTelegramHook()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('380')
  const [nameError, setNameError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNameChange = (e) => {
    const value = e.target.value
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁїЇєЄіІґҐ']*$/ // Allow only Ukrainian and English letters

    if (value.length > 55) {
      setNameError('Ім’я має містити не більше 55 символів')
    } else if (!nameRegex.test(value)) {
      setNameError('Ім’я може містити тільки англійські або українські символи')
    } else {
      setNameError('')
    }
    setName(value)
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value

    if (!/^\d*$/.test(value)) {
      setPhoneError('Номер телефону може містити лише цифри')
    } else if (!value.startsWith('380')) {
      setPhoneError('Номер телефону повинен починатися з 380')
    } else if (value.length > 12) {
      setPhoneError('Номер телефону має складатися з 12 цифр')
    } else {
      setPhoneError('')
    }
    setPhone(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!nameError && !phoneError && name && phone) {
      await sendMessage(`${name} ${phone} залишив заявку через сайт`)
      setIsSubmitted(true)

      // Notify parent component if needed
      if (onSubmitSuccess) {
        onSubmitSuccess({ name, phone })
      }
    }
  }

  return (
    <div>
      <h1>
        {isSubmitted ? 'Дякуємо за ваше звернення!' : 'Запишіться на прийом!'}
      </h1>
      {!isSubmitted && (
        <form
          className={`modal-form ${formStyle || ''}`}
          onSubmit={handleSubmit}
        >
          <label className="modal-form-input" htmlFor="name">
            Ім'я
            <input
              className="modal-form-input-field"
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleNameChange}
            />
            {nameError && <div className="error-message">{nameError}</div>}
          </label>

          <label className="modal-form-input" htmlFor="phone">
            Номер телефону
            <input
              className="modal-form-input-field"
              type="text"
              id="phone"
              value={phone}
              placeholder="Enter your phone number"
              onChange={handlePhoneChange}
            />
            {phoneError && <div className="error-message">{phoneError}</div>}
          </label>

          <AppButton
            text="Відправити"
            type="submit"
            styleType="black"
            style="submit-button"
          />
        </form>
      )}
    </div>
  )
}

ContactForm.propTypes = {
  onSubmitSuccess: PropTypes.func, // Optional callback for parent on successful submission
  formStyle: PropTypes.string,
}

export default ContactForm
