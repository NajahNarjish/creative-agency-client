import React from 'react';
import "./Service.css"

const Service = (props) => {
    const{icon, title, description} = props.service;
    return (
        <div className="col-6 col-md-4 mb-5 pb-5">
            <div className="service-card py-5">
                <img src={icon} className ="img-fluid w-25 mx-auto d-block" alt="pic"/>
                <p className = "d-flex justify-content-center heading py-3">{title}</p>
                <p className = "d-flex justify-content-center px-5">{description}</p>

            </div>
            
        </div>
    );
};

export default Service;