import './ModalWithForm.css';
import { useForm } from '../../hooks/useForm';
import closeIcon from '../../assets/closeicongrey.svg';

function ModalWithForm({ isOpen, onClose, handleSubmit }) {
    
    const { values, handleChange, setValues } = useForm({ name: "", imageUrl: "", weather: "hot" })

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(values);
        setValues({ name: "", imageUrl: "", weather: "hot" });
    }

    const handleModalClose = () => {
        setValues({ name: "", imageUrl: "", weather: "hot" });
        onClose();
    }

    return(
        <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
            <div className="modal__container">
                <button
                    type="button"
                    className="modal__close-btn"
                    onClick={handleModalClose}
                    aria-label="Close"
                >
                    <img src={closeIcon} alt="Close" className="modal__close-btn-icon" />
                </button>

                <p className="modalwithform__title">New garment</p>

                <form onSubmit={onSubmit} className="modal__form">
                    <div className="modal__fields">
                        <label className="modal__label" htmlFor="name">Name
                            <input 
                                className="modal__input" 
                                id="name" 
                                name="name" 
                                value={values.name}
                                type="text" 
                                placeholder="Name"
                                minLength={2} 
                                maxLength={30}
                                onChange={handleChange}
                                required  />
                            <span className="modal-error" id="name-error"></span>
                        </label>
                        <label className="modal__label" htmlFor="imageUrl">Image
                            <input 
                                className="modal__input" 
                                id="imageUrl" 
                                name="imageUrl" 
                                value={values.imageUrl}
                                type="url" 
                                placeholder="Image URL" 
                                onChange={handleChange}
                                required />
                            <span className="modal-error" id="imageUrl-error"></span>
                        </label>

                        <fieldset className="modal__fieldset">
                            <legend>Select the weather type:</legend>
                            <label>
                                <input 
                                    type="radio" 
                                    name="weather" 
                                    value="hot" 
                                    checked= {values.weather === 'hot'} 
                                    onChange={handleChange} /> Hot
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="weather" 
                                    value="warm"
                                    checked= {values.weather === 'warm'} 
                                    onChange={handleChange} /> Warm
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="weather" 
                                    value="cold"
                                    checked= {values.weather === 'cold'} 
                                    onChange={handleChange} /> Cold
                            </label>
                        </fieldset>
                    </div>
                    <button type="submit" className="modal__submit-btn">Add garmet</button>
                </form>
        </div>
    </div>
    )
}

export default ModalWithForm;