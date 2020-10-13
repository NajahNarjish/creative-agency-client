import React from 'react';
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";

const CustomerIcons = () => {
    return (
        <div className = "customerIcon container my-5 py-4">
            <div className="row mb-5 pb-3">
                <div className="col-6 col-md-2 offset-md-1 ">
                    <img className = " img-fluid w-75 pt-2" src={slack} alt="slack"/>
                </div>
                <div className="col-6 col-md-2">
                    <img className = " img-fluid w-75 pt-2" src={google} alt="google"/>
                </div>
                <div className="col-6 col-md-2">
                    <img className = " img-fluid w-50 pt-2" src={uber} alt="uber"/>  
                </div>
                <div className="col-6 col-md-2">
                    <img className = " img-fluid w-75" src={netflix} alt="netflix"/>
                </div>
                <div className="col-6 col-md-2">
                    <img className = " img-fluid w-75 pt-2" src={airbnb} alt="airbnb"/>
                </div>
            </div>
            
        </div>
    );
};

export default CustomerIcons;
