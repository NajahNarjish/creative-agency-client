import React, { useEffect, useState } from 'react';
// import customer1 from "../../../images/customer-1.png";
// import customer2 from "../../../images/customer-2.png";
// import customer3 from "../../../images/customer-3.png";
import SingleFeedback from '../SingleFeedback/SingleFeedback';

// const fakedata = [ 
//     {photo: "https://i.imgur.com/mk4SYsh.png",
//     reviewerName: "Nash Patrik ",
//     detail: "CEO, Manpol",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"},

//     {photo: "https://i.imgur.com/MedmZBX.png",
//     reviewerName: "Miriam Barron",
//     detail: "CEO, Manpol",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"},

//     {photo: "https://i.imgur.com/aKSxo1b.png",
//     reviewerName: "Bria Malone",
//     detail: "CEO, Manpol",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"},
// ]

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    // const handleAddReview  = () => {
    //     fetch("http://localhost:5000/addAllReviews", {
    //         method: 'POST',
    //         headers:{ 
    //          "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(fakedata)
    //     })
    // }

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data => setFeedbacks(data))
    }, [])
    return (
        <div style = {{paddingBottom: "195px"}} className = "container my-5 pt-5">
            <p style = {{fontSize:"34px", fontWeight:"600", textAlign:"center", padding: "30px"}}>Clients <span style = {{color: "#7AB259"}}>Feedback</span></p>
            <div className="row mt-5 pt-2">
                {/* <button onClick={handleAddReview}>add all review</button> */}
                {
                    feedbacks.map(feedback => <SingleFeedback feedback={feedback}></SingleFeedback>)
                }
            </div>
        </div>
    );
};

export default Feedback;