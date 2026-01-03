import React from "react";
import PropTypes from "prop-types"; // for validation
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessModal.css";

function SuccessModal({
  isOpen,
  onClose,
  message = "Registration successful!",
  onSwitchToLogin,
}) {
  const handleSubmit = (e) => {
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
      className="modal modal_success"
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

SuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string,
  onSwitchToLogin: PropTypes.func,
};

export default SuccessModal;
