import React from 'react';

const SingleOrder = (props) => {
    const {serviceName, detail}  = props.order;

    return (
        <div>
            <h1>{serviceName}</h1>
    <p>{detail}</p>

        </div>
    );
};

export default SingleOrder;