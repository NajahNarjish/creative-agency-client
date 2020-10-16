import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import "./Navbar.css"
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <section className = "container pt-3">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <Link class="navbar-brand company-logo">
                <img class="img-fluid " src={logo} alt="logo"/>
            </Link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ">
                        <Link className="nav-link mr-3" to="/home">Home</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="nav-link mr-3" to="/">Our Portfolio</Link>
                    </li>
                    <li class="nav-item ">
                        
                        <Link className="nav-link mr-3" to="/order">Dashboard</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="nav-link mr-3" to="/">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                        {
                            loggedInUser.email ? <button class="btn btn-dark"  onClick={() => {setLoggedInUser({}); sessionStorage.clear()} } >Log out</button> :
                            <Link to="/login"><button class="btn btn-dark" >Login</button></Link>
                        }  
                    </li> 
                    <li class="nav-item">
                        <h6  className="nav-link mr-3 mt-2"style = {{marginLeft:"5px"}}>{loggedInUser.displayName || loggedInUser.name}</h6>
                    </li> 
                </ul>
            </div>
        </nav>
        </section>
    );
};

export default Navbar;