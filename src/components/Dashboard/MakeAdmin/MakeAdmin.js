import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const  adminEmail= data;
        fetch("https://secret-escarpment-44361.herokuapp.com/addAdmin", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adminEmail)
        })

        alert("Review posted successfully");
        history.push("/");
    };
    return (
        <section>
            <div className="row ">
                <div class="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 ">
                    <div className="d-flex justify-content-between">
                        <h3 class="mt-5 mb-4">Make an Admin</h3>
                        <h6 className="m-5" style={{ marginLeft: "5px" }}>{loggedInUser.displayName || loggedInUser.name}</h6>
                    </div>

                    <div className="bg-light p-5 " style={{ height: "100vh" }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-5 mr-5 bg-white row" style = {{borderRadius:"20px"}}>
                                <div className = "col-md-9">
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input  id="email" ref={register({ required: true })} type="text" className="form-control" name="email" placeholder="Enter email address" />
                                        {errors.reviewerName && <span>This field is required</span>}
                                    </div>   
                                </div>
                                <div className = "col-md-3 mt-4">
                                    <button type="submit" className="btn btn-success ">Submit</button>
                                </div> 
                            </div>   
                        </form>    
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default MakeAdmin;