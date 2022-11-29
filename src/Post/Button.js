import { useState } from "react";

const Button = (props) => {
    const { className, value, text } = props;
    /* Hooks: declaracion que facilita la implementacion de estado
        [state, method]
    */
    const [state, setState] = useState(false);
    const [number, setNumber] = useState( value || 0);

    const Eval = () => {
        setState(!state);
        state ? setNumber(number - 1) : setNumber(number + 1)
    }

    return(
        <button onClick={() => Eval()}
            className={className}>
            {number} {text}
        </button>
    )
}

export default Button;