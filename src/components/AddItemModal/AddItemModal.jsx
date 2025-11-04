import ModalWithForm from '../ModalWithForm/ModalWithForm';

function AddItemModal({ isOpen, onClose, handleAddItemSubmit }) {
    return(
        <ModalWithForm 
        isOpen={isOpen} 
        onClose={onClose}
        title="New garmet"
        name="add-garment"
        buttonText="Add garment"
        handleSubmit={handleAddItemSubmit}
       />
    )
} 

export default AddItemModal;

