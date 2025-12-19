import React from "react";
import "./SuccessModal.css";

function SuccessModal({
  isOpen,
  onClose,
  message = "Registration successful!",
}) {
  if (!isOpen) return null;

  return (
    <div className="success-modal">
      <div className="success-modal__overlay" onClick={onClose}></div>
      <div className="success-modal__container">
        <button
          className="success-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="success-modal__content">
          <div className="success-modal__icon">✓</div>
          <h2 className="success-modal__title">{message}</h2>
          <button className="success-modal__button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
