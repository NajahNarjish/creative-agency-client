import React, { useEffect, useState } from 'react';
import SingleFeedback from '../SingleFeedback/SingleFeedback';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch("https://secret-escarpment-44361.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => setFeedbacks(data))
    }, [])
    return (
        <div style = {{paddingBottom: "185px"}} className = "container my-5 pt-5">
            <p style = {{fontSize:"34px", fontWeight:"600", textAlign:"center", padding: "30px"}}>Clients <span style = {{color: "#7AB259"}}>Feedback</span></p>
            <div className="row mt-5 pt-2">
                {
                    feedbacks.map(feedback => <SingleFeedback feedback={feedback}></SingleFeedback>)
                }
            </div>
        </div>
    );
};

export default Feedback;