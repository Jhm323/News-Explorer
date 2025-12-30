import React, { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  className = "modal",
  containerClassName = "modal__container",
}) {
  const baseClass = className.split(" ")[0];
  const modalClass = `${className}${isOpen ? " " + baseClass + "_opened" : ""}`;

  // Close modal on Escape key
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={modalClass} onClick={handleOverlayClick}>
      <div className={containerClassName}>
        <form
          className={`modal__form modal__form_type_${name}`}
          onSubmit={onSubmit}
        >
          <button
            type="button"
            className="modal__close-button"
            onClick={onClose}
          ></button>
          <h3 className="modal__title">{title}</h3>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
