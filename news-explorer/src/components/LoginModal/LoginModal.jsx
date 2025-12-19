import React, { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const { handleLogin } = useContext(AuthContext);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailInputRef = useRef(null);

  // Reset form, errors, and touched when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ email: "", password: "" });
      setErrors({ email: "", password: "", login: "" });
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
    setErrors((prev) => ({
      ...prev,
      email:
        formData.email === ""
          ? "Invalid email address"
          : !emailValid
          ? "Invalid email address"
          : "",
      password: formData.password === "" ? "Password required" : "",
    }));
    setIsValid(emailValid && passwordValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear login error when user starts typing
    if (errors.login) {
      setErrors((prev) => ({
        ...prev,
        login: "",
      }));
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
    setErrors((prev) => ({
      ...prev,
      login: "",
    }));

    const success = handleLogin(formData);
    if (success) {
      alert("Login successful!"); // Replace with SuccessModal later
      onClose();
    } else {
      setErrors((prev) => ({
        ...prev,
        login: "Invalid email or password",
      }));
    }
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
      {/* {errors.login && <div className="modal__error">{errors.login}</div>} */}

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

      <div className="modal__error-container">
        {errors.login && <div className="modal__error">{errors.login}</div>}
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
