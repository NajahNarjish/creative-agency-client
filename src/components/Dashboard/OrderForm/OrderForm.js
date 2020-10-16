import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const OrderForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const orderDetail = { ...loggedInUser, ...data };
        fetch("http://localhost:5000/addOrder", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderDetail)
        })

        // e.preventDefault();
        alert("Order placed successfully")
        history.push("/servicelist");
    };
    return (
        <div className="bg-light row" style={{ height: "100vh" }}>
            <div className = "col-md-7 ml-4 mt-5 pt-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input name="customerName" defaultValue={loggedInUser.name} ref={register} className="form-control" placeholder="Your name/company's name" />
                    </div>
                    <div className="form-group">
                        <input name="email" defaultValue={loggedInUser.email} ref={register} className="form-control"placeholder="Your Email Address" />
                    </div>
                    <div className="form-group">
                        <input name="status" defaultValue="Status: Order placed" className="form-control" ref={register} />
                    </div>
                    <div className="form-group">
                        <input name="serviceName" ref={register({ required: true })} className="form-control" placeholder="Service name" />
                        {errors.serviceName && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input name="detail" ref={register({ required: true })} className="form-control" placeholder="Project Details" />
                        {errors.detail && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input name="price" ref={register({ required: true })} className="form-control"  placeholder="Price" />
                        {errors.price && <span>This field is required</span>}
                    </div>
                    <input className = "btn btn-dark py-3 px-5" type="submit" value = "Send"/>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;