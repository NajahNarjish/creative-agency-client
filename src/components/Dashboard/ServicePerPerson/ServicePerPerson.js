import React from 'react';

const ServicePerPerson = (props) => {
    const { name, email, serviceName,  detail,  status } = props.service;
    
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{serviceName}</td>
            <td>{detail}</td>
            <td>{status}</td>
        </tr>
    );
};

export default ServicePerPerson;