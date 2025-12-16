import React, { useState, useRef, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegister, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [emailUnavailable, setEmailUnavailable] = useState("");
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    name: false,
  });
  const emailInputRef = useRef(null);

  // Reset form, errors, touched when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ email: "", password: "", name: "" });
      setErrors({ email: "", password: "", name: "" });
      setIsValid(false);
      setTouched({ email: false, password: false, name: false });
      setEmailUnavailable("");
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
    }
  }, [isOpen]);

  // Validate fields
  useEffect(() => {
    const emailValid = /\S+@\S+\.\S+/.test(formData.email);
    const passwordValid = formData.password.length > 0;
    const nameValid = formData.name.length > 0;
    setErrors({
      email:
        formData.email === ""
          ? "Email required"
          : !emailValid
          ? "Invalid email address"
          : "",
      password: formData.password === "" ? "Password required" : "",
      name: formData.name === "" ? "Username required" : "",
    });
    setIsValid(emailValid && passwordValid && nameValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "email" && emailUnavailable) {
      setEmailUnavailable("");
    }
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
    // Simulate email check
    if (formData.email === "taken@example.com") {
      setEmailUnavailable("This email is not available");
      return;
    }
    setEmailUnavailable("");
    if (onRegister) {
      onRegister(formData);
    }
  };

  return (
    <ModalWithForm
      title="Sign up"
      name="register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      className="modal"
      containerClassName="register-modal__container"
    >
      <div className="modal__input-group">
        <label className="modal__label" htmlFor="register-email">
          Email
        </label>
        <input
          id="register-email"
          type="email"
          name="email"
          className="modal__input"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={emailInputRef}
          required
        />
        <span className="modal__input-error">
          {touched.email && errors.email ? errors.email : "\u00A0"}
        </span>
      </div>
      <div className="modal__input-group">
        <label className="modal__label" htmlFor="register-password">
          Password
        </label>
        <input
          id="register-password"
          type="password"
          name="password"
          className="modal__input"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <span className="modal__input-error">
          {touched.password && errors.password ? errors.password : "\u00A0"}
        </span>
      </div>
      <div className="modal__input-group">
        <label className="modal__label" htmlFor="register-username">
          Username
        </label>
        <input
          id="register-username"
          type="text"
          name="name"
          className="modal__input"
          placeholder="Enter your username"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <span className="modal__input-error">
          {touched.name && errors.name ? errors.name : "\u00A0"}
        </span>
      </div>
      {emailUnavailable && (
        <div className="register-modal__email-unavailable-error">
          {emailUnavailable}
        </div>
      )}
      <button
        type="submit"
        className="modal__submit-button"
        disabled={!isValid}
      >
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
