import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getItems, addItems, deleteItems } from "../../utils/api";
import { getWeatherData } from "../../utils/weatherApi";

import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ItemModal from '../ItemModal/ItemModal';
import Footer from '../Footer/Footer';
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";

function App() {
  const [cards, setCards] = useState([]);

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

  const handleAddItemSubmit = (inputValues) => {

    addItems(inputValues)
      .then((data) => {
        setCards(prev => [data, ...prev]);
      })
      .catch(console.error);

    closeAddForm();

  }

  const handleDeleteItem = (card) => {

    deleteItems(card._id)
      .then(() => {
        setCards(prev => prev.filter(c => c._id !== card._id));
        handleCloseModal();
      })
      .catch(console.error);

  }

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

  useEffect(() => {

    getItems().then((items) => {
      setCards(items);
    })
    .catch(console.error);

  }, []);

  return (
    <>
    <CurrentTempUnitContext.Provider value={{ currentTempUnit, handleUnitChange }}>
      <Header onAddClothes={openAddForm} weatherData={weatherData} />
      <Routes>
        <Route path="/" element={
          <Main cards={cards} onCardClick={handleCardClick} weatherData={weatherData} />
        } />
        <Route path="/profile" element={
          <Profile cards={cards} onCardClick={handleCardClick} weatherData={weatherData} onAddClothes={openAddForm} />
        } />
      </Routes>
      <ItemModal card={selectedCard} isOpen={isModalOpen} onClose={handleCloseModal} handleDeleteItem={handleDeleteItem} />
      <AddItemModal isOpen={isAddFormOpen} onClose={closeAddForm} handleAddItemSubmit={handleAddItemSubmit} />
      <Footer />
    </CurrentTempUnitContext.Provider>
    </>
  )
}

export default App;
