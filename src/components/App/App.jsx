import { useState } from "react";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ItemModal from '../ItemModal/ItemModal';
import Footer from '../Footer/Footer';
import { defaultClothingItems } from '../../utils/clothingItems';
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [cards] = useState(defaultClothingItems);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const openAddForm = () => setIsAddFormOpen(true);
  const closeAddForm = () => setIsAddFormOpen(false);

  return (
    <>
    <Header onAddClothes={openAddForm} />
    <Main cards={cards} onCardClick={handleCardClick} />
    <ItemModal card={selectedCard} isOpen={isModalOpen} onClose={handleCloseModal} />
    <Footer />
    <ModalWithForm 
      isOpen={isAddFormOpen} 
      onClose={closeAddForm}
      title="New garmet"
      name="add-garment"
      buttonText="Add garment"
    />
    </>
  )
}

export default App
