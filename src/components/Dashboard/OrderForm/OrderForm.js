import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const OrderForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const orderDetail  = { ...loggedInUser, ...data};
        fetch("http://localhost:5000/addOrder", {
            method: 'POST',
            headers:{ 
             "Content-Type": "application/json"
            },
            body: JSON.stringify(orderDetail)
        })
        
        // e.preventDefault();
        history.push("/servicelist");
    };
    return (
        <div>
            <h1>place order</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="customerName" defaultValue={loggedInUser.name} ref={register} placeholder = "Your name/company's name"/>
                
                <input name="email" defaultValue={loggedInUser.email} ref={register} placeholder = "Your Email Address"/>
                <input name="status" defaultValue="Order placed" ref={register} />
                
                <input name="serviceName" ref={register({ required: true }) } placeholder="Service name"/>
                {errors.serviceName && <span>This field is required</span>}
                <input name="detail" ref={register({ required: true }) } placeholder="Project Details"/>
                {errors.detail && <span>This field is required</span>}
                <input name="price" ref={register({ required: true }) } placeholder="Price"/>
                {errors.price && <span>This field is required</span>}


                <input type="submit" />
            </form>

        </div>
    );
};

export default OrderForm;