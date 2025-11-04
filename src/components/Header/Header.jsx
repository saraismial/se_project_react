import { Link } from "react-router-dom";
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
                <Link to={'/'}>
                    <img className="header__logo" src={headerLogo} alt="App Logo" />
                </Link>
                <p className="header__dateplace">
                    <time>{currentDate}</time>
                    , {weatherData.city}
                </p>
            </div>
            <div className="header__right">
                <ToggleSwitch onChange={onChange} />
                <button className="header__add_btn" onClick={onAddClothes}>+ Add clothes</button>
                <Link className="header__link-profile" to={'/profile'}>
                    <p className="header__username">Sara Ismial</p>
                    <img className="header__avatar" src={headerAvatar} alt="User Avatar"/>
                </Link>
            </div>
       </header>
    )
}

export default Header;