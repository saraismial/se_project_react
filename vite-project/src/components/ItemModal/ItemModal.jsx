import './ItemModal.css';
import closeIcon from '../../assets/closeicon.svg';

function ItemModal({ card, isOpen, onClose }) {
    if (!card) return null;

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
                <img className="modal__image" src={card.link} alt={card.name} />
                <p className='modal__title'>{card.name}</p>
                <p className='modal__weather'>Weather: {String(card.weather).toLowerCase()}</p>
            </div>
        </div>
    )
}

export default ItemModal;