import headerLogo from "../../assets/logo.svg";
import headerAvatar from "../../assets/avatar.jpg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import './Header.css';

function Header({ onAddClothes, weatherData, onChange }) {
    const currentDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
    });

    return(
       <header className="header">
            <div className="header__left">
                <img className="header__logo" src={headerLogo} alt="App Logo" />
                <p className="header__dateplace">
                    <time>{currentDate}</time>
                    , {weatherData.city}
                </p>
            </div>
            <div className="header__right">
                <ToggleSwitch onChange={onChange} />
                <button className="header__add_btn" onClick={onAddClothes}>+ Add clothes</button>
                <p className="header__username">Sara Ismial</p>
                <img className="header__avatar" src={headerAvatar} alt="User Avatar"/>
            </div>
       </header>
    )
}

export default Header;