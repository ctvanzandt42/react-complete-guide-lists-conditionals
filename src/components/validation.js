import React from 'react'

const Validation = ( props ) => {
    let returned = 'Text too short';

    if (props.input.length >= 5) {
        returned = "Text long enough";
    }

    return (
        <div>
            <p>{returned}</p>
        </div>
    );
}

export default Validation;