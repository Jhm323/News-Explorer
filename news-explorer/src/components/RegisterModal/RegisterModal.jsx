import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegister, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onRegister) {
      onRegister({ email, password, name });
    }
  };

  return (
    <ModalWithForm
      title="Sign up"
      name="register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      className="register-modal"
      containerClassName="register-modal__container"
    >
      <label className="modal__label" htmlFor="signup-email">
        Email
      </label>
      <input
        id="signup-email"
        type="email"
        className="modal__input"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className="modal__label" htmlFor="signup-password">
        Password
      </label>
      <input
        id="signup-password"
        type="password"
        className="modal__input"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label className="modal__label" htmlFor="signup-username">
        Username
      </label>
      <input
        id="signup-username"
        type="text"
        className="modal__input"
        placeholder="Enter your username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <button type="submit" className="modal__submit-button">
        Sign up
      </button>
      <div className="modal__switch-row">
        <span className="modal__switch-text">or</span>
        <button
          type="button"
          className="modal__switch-button"
          onClick={onSwitchToLogin}
        >
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
