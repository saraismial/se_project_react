import './ModalWithForm.css';
import closeIcon from '../../assets/closeicongrey.svg';

function ModalWithForm({ isOpen, onClose }) {
    return(
        <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
            <div className="modal__container">
                <button
                    type="button"
                    className="modal__close-btn"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <img src={closeIcon} alt="Close" className="modal__close-btn-icon" />
                </button>

                <p className="modalwithform__title">New garment</p>

                <form className="modal__form">
                    <div className="modal__fields">
                        <label className="modal__label" htmlFor="name">Name
                            <input className="modal__input" id="name" name="name" type="text" placeholder="Name" required minLength={2} maxLength={30} />
                            <span className="modal-error" id="name-error"></span>
                        </label>
                        <label className="modal__label" htmlFor="imageUrl">Image
                            <input className="modal__input" id="imageUrl" name="imageUrl" type="url" placeholder="Image URL" required />
                            <span className="modal-error" id="imageUrl-error"></span>
                        </label>

                        <fieldset className="modal__fieldset">
                            <legend>Select the weather type:</legend>
                            <label><input type="radio" name="weather" value="hot" defaultChecked /> Hot</label>
                            <label><input type="radio" name="weather" value="warm" /> Warm</label>
                            <label><input type="radio" name="weather" value="cold" /> Cold</label>
                        </fieldset>
                    </div>
                    <button type="submit" className="modal__submit-btn">Add garmet</button>
                </form>
        </div>
    </div>
    )
}

export default ModalWithForm;