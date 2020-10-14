import React from 'react';
import Header from '../Header/Header';
import CustomerIcons from '../CustomerIcons/CustomerIcons';
import Services from '../Services/Services';
import Works from '../Works/Works';
import Feedback from '../Feedback/Feedback';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div style={{marginTop: "0px", backgroundColor:"#E5E5E5"}}>
            <Header/>
            <CustomerIcons/>
            <Services/>
            <Works/>
            <Feedback/>
            <Contact/>

        </div>
    );
};

export default Home;