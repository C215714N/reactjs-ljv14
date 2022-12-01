import { useState } from "react";

const Button = (props) => {
    const { gral, selected, regular, value, text } = props;
    /* Hooks: declaracion que facilita la implementacion de estado
        state, method
    */
    const [state, setState] = useState(false);
    const [number, setNumber] = useState( value || 0);

    const setReaction = () => {
        state ? setNumber(number - 1) : setNumber(number + 1)
        setState(!state);
    }

    return(
        <button className={gral + (state ? selected : regular) } 
            onClick={ setReaction }>
            {number} { text }
        </button>
) }

export default Button;