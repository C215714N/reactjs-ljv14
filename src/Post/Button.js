import { useState } from "react";

const Button = (props) => {
    const { className, value } = props;
    /* Hooks: declaracion que facilita la implementacion de estado
        state, method
    */
    const [state, setState] = useState(false);
    const [number, setNumber] = useState(props.value || 0);

    const Eval = () => {
        !state ? setNumber(number + 1) : setNumber(number - 1)
        setState(!state);
    }

    return(
        <button onClick={() => Eval()}
            className={className}>
            {number} {props.text}
        </button>
    )
}

export default Button;