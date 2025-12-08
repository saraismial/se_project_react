import "./ConfirmationModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function ConfirmationModal({
  card,
  isOpen,
  onClose,
  handleDeleteItem,
  isLoading,
  error,
}) {
  const handleDelete = () => handleDeleteItem(card);

  const switchElement = (
    <button type="button" className="modal__cancel-btn" onClick={onClose}>
      Cancel
    </button>
  );
  return (
    <ModalWithForm
      name="confirm-delete"
      title=""
      buttonText={isLoading ? "Deleting..." : "Yes, delete item"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleDelete}
      secondaryAct={switchElement}
      buttonClassName="modal__submit-btn-delete"
      footerClassName="modal__confirm-footer"
    >
      <span className="modal__confirm-text">
        Are you sure you want to delete this item?
        <br />
        This action is irreversible.
      </span>
      {error && <span className="modal__error">{error}</span>}
    </ModalWithForm>
  );
}

export default ConfirmationModal;
