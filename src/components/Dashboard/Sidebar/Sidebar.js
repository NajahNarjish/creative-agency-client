import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar  py-5 px-5" >
            <img src={logo} className = "img-fluid w-25 " alt= "logo"></img>

            <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/dashboard" className="text-dark">
                        <img src="" alt=""/> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-dark">
                        <img src="" alt=""/><span>Home</span>
                    </Link>
                </li>

                    <li>
                        <Link to="/servicelist" className="text-dark">
                        <img src="" alt=""/> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-dark">
                        <img src="" alt=""/><span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allServiceList" className="text-dark">
                        <img src="" alt=""/> <span>All Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adminAddService" className="text-dark" >
                        <img src="" alt=""/> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-dark" >
                        <img src="" alt=""/> <span>Settings</span>
                        </Link>
                    </li>
                
            </ul>
            <div>
                <Link to="/" className="text-dark"> <span>Logout</span></Link>
            </div>
        </div>        
    );
};

export default Sidebar;