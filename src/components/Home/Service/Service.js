import React from 'react';
import "./Service.css"
import {  useHistory } from 'react-router-dom';

const Service = ({service}) => {
    // const{icon, title, description} = props.service;
    const history = useHistory();
    return (
        <div onClick = {() => history.push("/order")} className="col-6 col-md-4 mb-5 pb-5">
            
                <div className="service-card py-5">
                {
                    service.image? <img className ="img-fluid w-25 mx-auto d-block" alt = "icon" src={`data:image/png;base64,${service.image.img}`}/>
                    :
                    <img className ="img-fluid w-25 mx-auto d-block" src={`http://localhost:5000/${service.img}`} alt=""/>
                }
                    {/* <img src={icon} className ="img-fluid w-25 mx-auto d-block" alt="pic"/> */}
                    <p className = "d-flex justify-content-center heading py-3">{service.title}</p>
                    <p className = "d-flex justify-content-center px-5">{service.description}</p>
                </div>
            
            
        </div>
    );
};

export default Service;