import headerLogo from "../../assets/logo.svg";
import headerAvatar from "../../assets/avatar.jpg";
import './Header.css';

function Header({ onAddClothes }) {
    const currentDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
    });

    return(
       <header className="header">
            <img className="header__logo" src={headerLogo} alt="App Logo" />
            <p className="header__dateplace">
                <time>{currentDate}</time>
                , New York
            </p>
            <button className="header__add_btn" onClick={onAddClothes}>+ Add clothes</button>
            <p className="header__username">Sara Ismial</p>
            <img className="header__avatar" src={headerAvatar} alt="User Avatar"/>
       </header>
    )
}

export default Header;