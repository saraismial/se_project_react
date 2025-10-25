import { useState, useEffect } from "react";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ItemModal from '../ItemModal/ItemModal';
import Footer from '../Footer/Footer';
import { defaultClothingItems } from '../../utils/clothingItems';
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { getWeatherData } from "../../utils/weatherApi";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

function App() {
  const [cards] = useState(defaultClothingItems);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });

  const [currentTempUnit, setCurrentTempUnit] = useState("F");

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

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  const handleUnitChange = () => {
    if (currentTempUnit == "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  }

  return (
    <>
    <CurrentTempUnitContext.Provider value={{ currentTempUnit, handleUnitChange }}>
      <Header onAddClothes={openAddForm} weatherData={weatherData} />
      <Main cards={cards} onCardClick={handleCardClick} weatherData={weatherData} />
      <ItemModal card={selectedCard} isOpen={isModalOpen} onClose={handleCloseModal} />
      <Footer />
      <ModalWithForm 
        isOpen={isAddFormOpen} 
        onClose={closeAddForm}
        title="New garmet"
        name="add-garment"
        buttonText="Add garment"
      />
    </CurrentTempUnitContext.Provider>
    </>
  )
}

export default App;
