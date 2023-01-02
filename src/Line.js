import React from 'react';
import "./Line.css";

function Line(props) {

    return (
        <div className='line'>
            {props.children}
        </div>
    )
}

export {Line};