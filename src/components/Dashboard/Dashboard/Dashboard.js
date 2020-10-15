import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-2">
                        <Link to="/orderform">
                            <div class="pt-5">
                                <p>order</p>
                                {/* <img src={volunteer} alt="volunteer" style={{ height: "20px" }}></img><span>Vol. register list</span> */}
                            </div>
                        </Link>
                        <Link to="/servicelist">
                            <div class="pt-5">
                                <p>service list</p>
                                {/* <img src={plus} alt="plus" style={{ height: "20px" }}></img><span>Add event</span> */}
                            </div>
                        </Link>
                        <Link to="/review">
                            <div class="pt-5">
                                <p>review</p>
                                {/* <img src={plus} alt="plus" style={{ height: "20px" }}></img><span>Add event</span> */}
                            </div>
                        </Link>
                        <Link to="/allServiceList">
                            <div class="pt-5">
                                <p>All service list</p>
                                {/* <img src={plus} alt="plus" style={{ height: "20px" }}></img><span>Add event</span> */}
                            </div>
                        </Link>
                        <Link to="/adminAddService">
                            <div class="pt-5">
                                <p>Add service</p>
                                {/* <img src={plus} alt="plus" style={{ height: "20px" }}></img><span>Add event</span> */}
                            </div>
                        </Link>
                    </div>
                    <div class="col-lg-10 bg-light p-5">
                        <div class="bg-white">
                            <h2 class="text-center mb-5 pt-3">Place an Order</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

