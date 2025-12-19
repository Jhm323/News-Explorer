import React, { useState, useRef, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessModal.css";

function SuccessModal({
  isOpen,
  onClose,
  message = "Registration successful!",
  onSwitchToLogin,
}) {
  const handleSubmit = (e) => {
    onClose();
    e.preventDefault();
    onClose();
  };

  return (
    <ModalWithForm
      title={message}
      name="success"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      className="modal"
      containerClassName="modal__container"
    >
      {onSwitchToLogin && (
        <div className="modal__switch-row modal__switch-row_success">
          <button
            type="button"
            className="modal__switch-button modal__switch-button_success"
            onClick={onSwitchToLogin}
          >
            Sign In
          </button>
        </div>
      )}
    </ModalWithForm>
  );
}

export default SuccessModal;
