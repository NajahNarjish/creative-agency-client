import React from 'react';

const ServicePerPerson = (props) => {
    const { name, email, serviceName,  detail, _id, status } = props.service;
    // const deleteRegistration = () => {
    //     fetch(("https://tranquil-reef-85303.herokuapp.com/delete/" + _id), {
    //         method: 'DELETE'
    //     })
    //     console.log("deleted");
                 
    // }

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