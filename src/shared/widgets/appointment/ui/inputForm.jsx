import React, { useState } from 'react';
import './inputForm.css';
import useTelegramHook from '../../../hooks/useTelegramHook' // Make sure you have styles.css included

const InputForm = () => {
  const {sendMessage} = useTelegramHook();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('380');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁїЇєЄіІґҐ']*$/;

    if (value.length > 55) {
      setNameError('Назва має містити не більше 55 символів');
    } else if (!nameRegex.test(value)) {
      setNameError('Назва може містити тільки англійські або українські символи');
    } else {
      setNameError('');
    }
    setName(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // Allow only numeric characters and keep the "380" prefix
    if (!/^\d*$/.test(value)) {
      setPhoneError('Номер телефону може містити лише цифри');
    } else if (!value.startsWith('380')) {
      setPhoneError('Номер телефону повинен починатися з 380');
    } else if (value.length > 12) {
      setPhoneError('Номер телефону має складатися з 12 цифр');
    } else {
      setPhoneError('');
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !phoneError && name && phone) {
      setIsSubmitted(true);
      sendMessage(`${name + " " + phone}` + "Залишив заявку через сайт");
    }
  };

  return (
    <div>
      <h1 className={isSubmitted && "submitted"}>{isSubmitted ? 'Дякуємо за ваше звернення!' : 'Запишіться на прийом!'}</h1>
      {!isSubmitted && (
        <div className={`modal-container`}>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Ім'я</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Ім'я"
            />
            {nameError && <div className="error-message">{nameError}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="phone">Номер телефону</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
            {phoneError && <div className="error-message">{phoneError}</div>}
          </div>
          <button type="submit" className="submit-button">Відправити</button>
        </form>
        </div>
      )}
    </div>
  );
};

export default InputForm;
