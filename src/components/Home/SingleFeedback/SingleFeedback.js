import React from 'react';
import "./SingleFeedback.css"

const SingleFeedback = (props) => {
    const { picture, name, designation, description } = props.feedback;
    return (
        <div className="col-6 col-md-4  singleFeedback-container">
            <div class="card p-2">
                <div className="d-flex flex-row pl-3">
                    <img className="card-img-top img-fluid w-25 p-2" src={picture}  alt="Card image cap"></img>
                    <div className="pt-3 pl-2">
                        <h6 className = "heading">{name}</h6>
                        <p className = "designation">{designation}</p> 
                    </div>
                </div>
                <div>
                    <p class="card-text p-3">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFeedback;