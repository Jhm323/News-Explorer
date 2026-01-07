// import { useEffect, useCallback } from "react";
// import PropTypes from "prop-types";
// import "./ModalWithForm.css";

// function ModalWithForm({
//   children,
//   title,
//   name,
//   isOpen,
//   onClose,
//   onSubmit,
//   className = "modal",
//   containerClassName = "modal__container",
// }) {
//   const baseClass = className.split(" ")[0];
//   const modalClass = `${className}${isOpen ? " " + baseClass + "_opened" : ""}`;

//   // Close modal on Escape key
//   const handleEscClose = useCallback(
//     (e) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     },
//     [onClose]
//   );

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("keydown", handleEscClose);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscClose);
//     };
//   }, [isOpen, handleEscClose]);

//   // Close modal when clicking outside
//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className={modalClass} onClick={handleOverlayClick}>
//       <div className={containerClassName}>
//         <form
//           className={`modal__form modal__form_type_${name}`}
//           onSubmit={onSubmit}
//         >
//           <button
//             type="button"
//             className="modal__close-button"
//             onClick={onClose}
//           ></button>
//           <h3 className="modal__title">{title}</h3>
//           {children}
//         </form>
//       </div>
//     </div>
//   );
// }

// ModalWithForm.propTypes = {
//   children: PropTypes.node,
//   title: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   className: PropTypes.string,
//   containerClassName: PropTypes.string,
// };

import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
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
  const handleEscClose = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, handleEscClose]);

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

ModalWithForm.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

ModalWithForm.displayName = "ModalWithForm";

export default ModalWithForm;
