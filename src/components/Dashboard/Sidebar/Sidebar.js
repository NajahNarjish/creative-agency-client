import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/isAdmin", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then (res => res.json())
        .then (data => setIsAdmin(data))
    },[])

    return (
        <div className="sidebar  py-5 px-5" >
            <img src={logo} className = "img-fluid w-25 " alt= "logo"></img>

            <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/" className="text-dark">
                        <img src="" alt=""/><span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/order" className="text-dark">
                        <img src="" alt=""/> <span>Order</span>
                    </Link>
                </li>
                {!isAdmin &&
                 <div>
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
                </div>}

                {isAdmin && 
                <div>
                    <li>
                        <Link to="/allServiceList" className="text-dark">
                        <img src="" alt=""/> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adminAddService" className="text-dark" >
                        <img src="" alt=""/> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-dark" >
                        <img src="" alt=""/> <span>Make Admin</span>
                        </Link>
                    </li>  
                </div>}      
            </ul>
            <div>
                <Link to="/" className="text-dark"> <span>Logout</span></Link>
            </div>
        </div>        
    );
};

export default Sidebar;