import "./LogoutModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LogoutModal({ isOpen, onClose, onSignOut, isLoading, error }) {
  const switchElement = (
    <button type="button" className="modal__cancel-btn" onClick={onClose}>
      Cancel
    </button>
  );
  return (
    <ModalWithForm
      name="confirm-logout"
      title=""
      buttonText={isLoading ? "Logging out..." : "Yes, log out"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSignOut}
      secondaryAct={switchElement}
      buttonClassName="modal__submit-btn-logout"
      footerClassName="modal__confirm-footer"
    >
      <span className="modal__confirm-text">
        Are you sure you want to log out?
      </span>
      {error && <span className="modal__error">{error}</span>}
    </ModalWithForm>
  );
}

export default LogoutModal;
