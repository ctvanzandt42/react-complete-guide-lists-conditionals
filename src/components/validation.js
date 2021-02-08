import React from 'react'

const validation = ( props ) => {
    let returned = "Text too short";

    if (props.inputLength > 5)
        returned = "Text long enough";

    return (
        <div>
            <p>{returned}</p>
        </div>
    );
};

export default validation;