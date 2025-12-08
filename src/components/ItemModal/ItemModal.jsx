import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import closeIcon from "../../assets/closeicon.svg";

import "./ItemModal.css";

function ItemModal({ card, isOpen, onClose, openConfirmation }) {
  const currentUser = useContext(CurrentUserContext);

  if (!card) return null;

  const ownerId = typeof card.owner === "string" ? card.owner : card.owner?._id;

  const isOwn = ownerId === currentUser?._id;

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__image-container">
        <button
          type="button"
          className="modal__preview-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={closeIcon} alt="Close Icon" className="modal__closeicon" />
        </button>
        <img className="modal__image" src={card.imageUrl} alt={card.name} />
        <div className="modal__content">
          <div className="modal__text">
            <p className="modal__title">{card.name}</p>
            <p className="modal__weather">
              Weather: {String(card.weather).toLowerCase()}
            </p>
          </div>
          {isOwn && (
            <div className="modal__delete">
              <button className="modal__delete-btn" onClick={openConfirmation}>
                Delete item
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
