import React from "react";
// import classes from "./button.module.css"

const Button = ({ el, f }) => {
    return (
        <div>
            <button onClick={f}>{el}</button>
        </div>
    )
}

export default Button;