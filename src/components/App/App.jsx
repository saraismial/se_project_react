import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getItems, addItems, deleteItems } from "../../utils/api";
import { register, login, getUserData } from "../../utils/auth";
import { getWeatherData } from "../../utils/weatherApi";

import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

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

  const closeAllModals = () => {
    setIsModalOpen(false);
    setSelectedCard(null);

    setIsAddFormOpen(false);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);

    setAuthError("");
  };

  const openLoginModal = () => {
    setAuthError("");
    setIsLoginModalOpen(true);
  };

  const openRegisterModal = () => {
    setAuthError("");
    setIsRegisterModalOpen(true);
  };

  const handleAddItemSubmit = (inputValues) => {
    const token = localStorage.getItem("jwt");

    addItems(inputValues, token)
      .then((data) => {
        setCards((prev) => [data, ...prev]);
      })
      .catch(console.error);

    closeAddForm();
  };

  const handleDeleteItem = (card) => {
    const token = localStorage.getItem("jwt");

    deleteItems(card._id, token)
      .then(() => {
        setCards((prev) => prev.filter((c) => c._id !== card._id));
        handleCloseModal();
      })
      .catch(console.error);
  };

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
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setIsLoadingUser(false);
      return;
    }

    getUserData(token)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error("Token check failed:", err.message);
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        setCurrentUser(null);
      })
      .finally(() => {
        setIsLoadingUser(false);
      });
  }, []);

  const handleRegister = ({ name, avatar, email, password }) => {
    setIsAuthLoading(true);
    setAuthError("");

    return register({ name, avatar, email, password })
      .then(() => {
        return handleLogin({ email, password });
      })
      .then(() => {
        setIsRegisterModalOpen(false);
      })
      .catch((err) => {
        console.error("Registration Error:", err.message);
        setAuthError(err.message);
      })
      .finally(() => {
        setIsAuthLoading(false);
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsAuthLoading(true);
    setAuthError("");

    return login({ email, password })
      .then((res) => {
        if (!res.token) {
          throw new Error("No token returned from server");
        }
        localStorage.setItem("jwt", res.token);

        return getUserData(res.token);
      })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
      })
      .catch((err) => {
        console.error("Login Error:", err.message);
        setAuthError(err.message);
      })
      .finally(() => {
        setIsAuthLoading(false);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    getItems(token)
      .then((items) => {
        setCards(items);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  return (
    <>
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleUnitChange }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            onAddClothes={openAddForm}
            weatherData={weatherData}
            onChange={handleUnitChange}
            isLoggedIn={isLoggedIn}
            onLoginClick={openLoginModal}
            onRegisterClick={openRegisterModal}
            onSignOut={handleSignOut}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  cards={cards}
                  onCardClick={handleCardClick}
                  weatherData={weatherData}
                />
              }
            />
            <Route
              path="/profile"
              element={
                isLoggedIn ? (
                  <Profile
                    cards={cards}
                    onCardClick={handleCardClick}
                    onAddClothes={openAddForm}
                    onSignOut={handleSignOut}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
          </Routes>
          <ItemModal
            card={selectedCard}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            handleDeleteItem={handleDeleteItem}
          />
          <Footer />
          <AddItemModal
            isOpen={isAddFormOpen}
            onClose={closeAddForm}
            handleAddItemSubmit={handleAddItemSubmit}
          />
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={closeAllModals}
            onLogin={handleLogin}
            isLoading={isAuthLoading}
            error={authError}
            onSwitchToRegister={() => {
              setIsLoginModalOpen(false);
              setIsRegisterModalOpen(true);
            }}
          />
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={closeAllModals}
            onRegister={handleRegister}
            isLoading={isAuthLoading}
            error={authError}
            onSwitchToLogin={() => {
              setIsRegisterModalOpen(false);
              setIsLoginModalOpen(true);
            }}
          />
        </CurrentUserContext.Provider>
      </CurrentTempUnitContext.Provider>
    </>
  );
}

export default App;
