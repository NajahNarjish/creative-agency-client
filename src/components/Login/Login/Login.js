import React, { useState, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation, Link } from 'react-router-dom';
import "./Login.css";
import google from "../../../images/logos/google-logo.png";
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
    });

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem("token", idToken);
        }).catch(function (error) {
            //handle error
        });
    }


    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const singedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(singedInUser);
                setLoggedInUser(singedInUser);
                setUserToken();
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    photo: '',
                    email: '',
                    password: '',
                    error: '',
                    success: false
                }
                    sessionStorage.clear()
                setUser(signedOutUser);


            })
            .catch(err => {
            })
    }

    return (
        <div class="container">
            <Navbar />
            <div class="row">
                <div class="col-12 col-lg-2"></div>
                <div class="col-12 col-lg-8 " style={{ textAlign: 'center' }}>
                    <div className='login-form'>
                        <h1>Login with</h1>

                        {
                            user.isSignedIn ? <button onClick={handleSignOut}>Sign out from google</button> :
                                <button className='googleButton' onClick={handleGoogleSignIn}>
                                    <img src={google} style={{ width: "10%" }} alt="" />
                                    <span style={{ paddingLeft: "10px" }}>Continue with Google</span>
                                </button>
                        }

                        <p className = 'mt-3'>Don't have an account?<span><Link to ="/login" style={{ color: "green" }}> Create an account</Link></span></p>
                    </div>
                </div>
                <div class="col-12 col-lg-2"></div>
            </div>
        </div>
    );
}

export default Login;