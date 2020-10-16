import React from 'react';
import "./SingleFeedback.css"

const SingleFeedback = (props) => {
   
    const { photo, reviewerName, detail, description } = props.feedback;

    return (
        <div className="col-6 col-md-4 mb-5 singleFeedback-container">
            <div class="card p-2 scrollable">
                <div className="d-flex flex-row pl-3 ">
                    <img className="card-img-top rounded-circle img-fluid w-25 p-2" src={photo}  alt="CardProfile"></img>
                    <div className="pt-3 pl-2">
                        <h6 className = "heading">{reviewerName}</h6>
                        <p className = "designation">{detail}</p> 
                    </div>
                </div>
                <div className = "overflow-auto">
                    <p className="card-text description p-3 ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFeedback;