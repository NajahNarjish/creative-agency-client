import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const reviewDetail = { ...loggedInUser, ...data };
        fetch("https://secret-escarpment-44361.herokuapp.com/addReview", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewDetail)
        })

        alert("Review posted successfully");
        history.push("/");
    };
    return (
        <section>
            <div className="row ">
                <div class="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 ">
                    <div className="d-flex justify-content-between">
                        <h3 class="mt-5 mb-4">Please put your review here</h3>
                        <h6 className="m-5" style={{ marginLeft: "5px" }}>{loggedInUser.displayName || loggedInUser.name}</h6>
                    </div>
                    <div className="bg-light row" style={{ height: "100vh" }}>
                        <div className="col-md-7 ml-4 mt-5 pt-2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input name="reviewerName" ref={register({ required: true })} className="form-control" placeholder="Your name" />
                                    {errors.reviewerName && <span>This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <input name="detail" ref={register({ required: true })} className="form-control" placeholder="Company's name and Designation" />
                                    {errors.detail && <span>This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <textarea name="description" ref={register({ required: true })} cols="30" rows="5" className="form-control" placeholder="Description"></textarea>
                                    {errors.description && <span>This field is required</span>}
                                </div>

                                <input className="btn btn-dark py-3 px-5" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;