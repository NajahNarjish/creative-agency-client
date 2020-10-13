import React from 'react';
import webDesign from '../../../images/icons/service1.png';
import graficDesign from '../../../images/icons/service2.png';
import webDev from '../../../images/icons/service3.png';
import Service from "../../Home/Service/Service"


const services = [ {icon: webDesign,
                    title: "Web & Mobile design",
                    description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product."},

                    {icon: graficDesign,
                    title: "Graphic design",
                    description: "Amazing flyers, social media posts and brand representations that would make your brand stand out."},

                    {icon: webDev,
                    title: "Web development",
                    description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general."}
                ]

const Services = () => {
    return (
        <div>
            <h3>Provide Awesome Services</h3>
            {
                services.map(service => <Service service={service}></Service>)
            }

        </div>
    );
};

export default Services;