import { Link } from "react-router-dom";
import { useContext } from "react";

import headerLogo from "../../assets/logo.svg";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Header.css";

function Header({
  onAddClothes,
  weatherData,
  // onChange,
  isLoggedIn,
  onLoginClick,
  onRegisterClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const userName = currentUser?.name || "";
  const userInitial = userName ? userName[0].toUpperCase() : "?";
  const userAvatar = currentUser?.avatar || null;

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="App Logo" />
        </Link>
        <p className="header__dateplace">
          <time>{currentDate}</time>, {weatherData.city}
        </p>
        {/* <ToggleSwitch onChange={onChange} /> */}
      </div>

      <div className="header__right">
        {isLoggedIn ? (
          <>
            {/* LOGGED-IN VIEW */}
            <button className="header__add_btn" onClick={onAddClothes}>
              + Add clothes
            </button>

            <Link className="header__link-profile" to="/profile">
              <p className="header__username">{userName}</p>

              {userAvatar ? (
                <img
                  className="header__avatar"
                  src={userAvatar}
                  alt="User avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">{userInitial}</div>
              )}
            </Link>
          </>
        ) : (
          <>
            {/* LOGGED-OUT VIEW */}
            <button
              className="header__auth-btn header__auth-btn_type_signup"
              onClick={onRegisterClick}
            >
              Sign up
            </button>
            <button
              className="header__auth-btn header__auth-btn_type_login"
              onClick={onLoginClick}
            >
              Log in
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
