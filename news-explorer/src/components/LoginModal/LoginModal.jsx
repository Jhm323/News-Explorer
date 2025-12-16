import React, { useState, useRef, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const emailInputRef = useRef(null);

  // Reset form, errors, and touched when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ email: "", password: "" });
      setErrors({ email: "", password: "" });
      setIsValid(false);
      setTouched({ email: false, password: false });
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
    }
  }, [isOpen]);

  // Validate fields
  useEffect(() => {
    const emailValid = /\S+@\S+\.\S+/.test(formData.email);
    const passwordValid = formData.password.length > 0;
    setErrors({
      email:
        formData.email === ""
          ? "Invalid email address"
          : !emailValid
          ? "Invalid email address"
          : "",
      password: formData.password === "" ? "Password required" : "",
    });
    setIsValid(emailValid && passwordValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // Form submission logic
  };

  return (
    <ModalWithForm
      title="Sign in"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      className="modal"
      containerClassName="login-modal__container"
    >
      <div className="modal__input-group-email">
        <label className="modal__label" htmlFor="login-email">
          Email
        </label>
        <input
          id="login-email"
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="modal__input"
          ref={emailInputRef}
          required
        />
        <span className="modal__input-error">
          {touched.email && errors.email ? errors.email : "\u00A0"}
        </span>
      </div>
      <div className="modal__input-group-password">
        <label className="modal__label" htmlFor="login-password">
          Password
        </label>
        <input
          id="login-password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="modal__input"
          required
        />
        <span className="modal__input-error">
          {touched.password && errors.password ? errors.password : "\u00A0"}
        </span>
      </div>
      <button
        type="submit"
        className="modal__submit-button"
        disabled={!isValid}
      >
        Sign In
      </button>
      <div className="modal__switch-row">
        <span className="modal__switch-text">or</span>
        <button
          type="button"
          className="modal__switch-button"
          onClick={onSwitchToRegister}
        >
          Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
