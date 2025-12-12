import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // Form submission logic will come later
  };

  return (
    <ModalWithForm
      title="Sign In"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        className="modal__input"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        className="modal__input"
        required
      />
      <button type="submit" className="modal__submit-button">
        Sign In
      </button>
      <button
        type="button"
        className="modal__switch-button"
        onClick={onSwitchToRegister}
      >
        Sign Up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
