import React from 'react';
import customer1 from "../../../images/customer-1.png";
import customer2 from "../../../images/customer-2.png";
import customer3 from "../../../images/customer-3.png";
import SingleFeedback from '../SingleFeedback/SingleFeedback';

const feedbacks = [ 
    {picture: customer1,
    name: "Nash Patrik",
    designation: "CEO, Manpol",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"},

    {picture: customer2,
    name: "Miriam Barron",
    designation: "CEO, Manpol",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"},

    {picture: customer3,
    name: "Bria Malone",
    designation: "CEO, Manpol",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"},
]

const Feedback = () => {
    return (
        <div style = {{paddingBottom: "195px"}} className = "container my-5 pt-5">
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