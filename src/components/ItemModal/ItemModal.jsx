import './ItemModal.css';
import closeIcon from '../../assets/closeicon.svg';

function ItemModal({ card, isOpen, onClose, handleDeleteItem }) {
    if (!card) return null;

    const handleDelete = () => handleDeleteItem(card);

    return(
        <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
            <div className="modal__image-container">
                <button 
                    type="button"
                    className="modal__preview-close-btn"
                    onClick={onClose}
                    aria-label='Close'
                >
                    <img src={closeIcon} alt="Close Icon" className="modal__closeicon" />
                </button>
                <img className="modal__image" src={card.imageUrl} alt={card.name} />
                <div className="modal__content">
                    <div className="modal__text">
                        <p className='modal__title'>{card.name}</p>
                        <p className='modal__weather'>Weather: {String(card.weather).toLowerCase()}</p>
                    </div>
                    <div className="modal__delete">
                        <button className="modal__delete-btn" onClick={handleDelete}>Delete item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;