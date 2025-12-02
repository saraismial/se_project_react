import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, onClose, handleAddItemSubmit }) {
  const initialValues = { name: "", imageUrl: "", weather: "hot" };

  const { values, handleChange, setValues } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemSubmit(values);
    setValues(initialValues);
  };

  const handleClose = () => {
    setValues(initialValues);
    onClose();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="name">
        Name
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
          required
        />
        <span className="modal-error" id="name-error"></span>
      </label>

      <label className="modal__label" htmlFor="imageUrl">
        Image
        <input
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          value={values.imageUrl}
          type="url"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
        <span className="modal-error" id="imageUrl-error"></span>
      </label>

      <fieldset className="modal__fieldset">
        <legend>Select the weather type:</legend>
        <label>
          <input
            type="radio"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />{" "}
          Hot
        </label>
        <label>
          <input
            type="radio"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label>
          <input
            type="radio"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
