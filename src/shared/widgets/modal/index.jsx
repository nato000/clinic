import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    // Close modal only if background is clicked
    if (e.target.className.includes("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {/*<video className="modal-image" autoPlay muted loop>*/}
        {/*  <source src={imageSrc} type="video/mp4" />*/}
        {/*</video>*/}
        <img src={imageSrc} alt="Modal Content" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
