import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import SingleOrder from '../Dashboard/SingleOrder/SingleOrder';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/showOrders?email="+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        
            <div className="container">
                <Navbar/>
                <div className="row">
                {
                    orders.map(order =><SingleOrder order = {order} ></SingleOrder>)
                }
                </div>
            </div>
    );
};

export default ServiceList;