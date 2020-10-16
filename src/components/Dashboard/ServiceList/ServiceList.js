import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import SingleOrder from '../Dashboard/SingleOrder/SingleOrder';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/showOrders?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <section >
            <div className="row ">
                <div class="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 ">
                    <div className="d-flex justify-content-between">
                        <h3 class="mt-5 mb-4">Our Services to you</h3>
                        <h6 className="m-5" style={{ marginLeft: "5px" }}>{loggedInUser.displayName || loggedInUser.name}Login</h6>
                    </div>
                    <div className="bg-light row px-3 pt-5" style={{ height: "100vh" }}>
                    {
                        orders.map(order => <SingleOrder order={order} ></SingleOrder>)
                    }
                    
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ServiceList;