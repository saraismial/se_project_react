import { useContext } from "react";
import './ToggleSwitch.css';
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

function ToggleSwitch() {
    //TODO- desctructure the handler
    const contextValue = useContext(CurrentTempUnitContext);

    return(
        <label htmlFor="toggleswitch" className="toggleswitch">
            <input 
                id="toggleswitch"
                type="checkbox" 
                className="toggleswitch__checkbox" 
                onChange={contextValue.handleUnitChange}
            />
            <span className="toggleswitch__circle"></span>
            <span className="toggleswitch__value toggleswitch__value_left">F</span>
            <span className="toggleswitch__value toggleswitch__value_right">C</span>
        </label>
    );
}

export default ToggleSwitch;