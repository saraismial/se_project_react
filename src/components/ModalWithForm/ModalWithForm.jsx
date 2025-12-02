import "./ModalWithForm.css";
import closeIcon from "../../assets/closeicongrey.svg";

function ModalWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children,
  secondaryAct,
}) {
  const handleOverlayMouseDown = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""}`}
      onMouseDown={handleOverlayMouseDown}
    >
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={closeIcon} alt="Close" className="modal__close-btn-icon" />
        </button>

        <p className="modalwithform__title">{title}</p>

        <form className="modal__form" name={name} onSubmit={onSubmit}>
          <div className="modal__fields">{children}</div>
          <div className="modal__footer">
            <button type="submit" className="modal__submit-btn">
              {buttonText}
            </button>
            {secondaryAct}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
