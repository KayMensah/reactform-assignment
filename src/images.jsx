import React from 'react';

function Image(props) {
    return (
        <img src={props.name} alt="reactjsimage" className="img-fluid image2 " />
    );
};

export default Image;