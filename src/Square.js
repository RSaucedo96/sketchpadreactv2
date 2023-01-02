import React, {useState} from 'react';
import "./Square.css";

function Square() {

    const [active, setActive] = useState(false);
    const handleMouseOver = () => {
        setActive(!active);
    };

    return (
        <div
            className={active ? "hoverSquare" : "square"}
            onMouseOver={handleMouseOver}
        ></div>
    )
}

export {Square};
