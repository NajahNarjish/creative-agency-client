import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const reviewDetail  = { ...loggedInUser, ...data};
        fetch("http://localhost:5000/addReview", {
            method: 'POST',
            headers:{ 
             "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewDetail)
        })
        
        // e.preventDefault();
        history.push("/servicelist");
    };
    return (
        <div>
            <Navbar />
            <h1>please put your review here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="reviewerName" ref={register({ required: true }) } placeholder="Your name"/>
                {errors.reviewerName && <span>This field is required</span>}
                <input name="detail" ref={register({ required: true }) } placeholder="Company's name and Designation"/>
                {errors.detail && <span>This field is required</span>}
                <input name ="description" ref={register({ required: true }) } placeholder="Description"/>
                {errors.description && <span>This field is required</span>}

                <input className = 'btn btn-dark' type="submit" />
            </form>
            
        </div>
    );
};

export default Review;