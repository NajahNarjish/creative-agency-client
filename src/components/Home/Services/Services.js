import React, { useEffect, useState } from 'react';
import Service from "../../Home/Service/Service"

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://secret-escarpment-44361.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className = "container">
            <p style = {{fontSize:"34px", fontWeight:"600", textAlign:"center", padding: "30px"}}>Provide Awesome <span style = {{color: "#7AB259"}}>Services</span></p>
            <div className="row mt-5 pt-2">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;