import React, { useEffect, useState } from 'react';
// import webDesign from '../../../images/icons/service1.png';
// import graficDesign from '../../../images/icons/service2.png';
// import webDev from '../../../images/icons/service3.png';
import Service from "../../Home/Service/Service"

// const fakedata = [ {icon: webDesign,
//                     title: "Web & Mobile design",
//                     description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product."},

//                     {icon: graficDesign,
//                     title: "Graphic design",
//                     description: "Amazing flyers, social media posts and brand representations that would make your brand stand out."},

//                     {icon: webDev,
//                     title: "Web development",
//                     description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general."}
//                 ]

const Services = () => {
    const [services, setServices] = useState([]);
    // const handleAddService  = () => {
    //     fetch("http://localhost:5000/addAllServices", {
    //         method: 'POST',
    //         headers:{ 
    //          "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(fakedata)
    //     })
    // }

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className = "container">
            <p style = {{fontSize:"34px", fontWeight:"600", textAlign:"center", padding: "30px"}}>Provide Awesome <span style = {{color: "#7AB259"}}>Services</span></p>
            <div className="row mt-5 pt-2">
                {/* <button onClick={handleAddService}>add all review</button> */}

                
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;