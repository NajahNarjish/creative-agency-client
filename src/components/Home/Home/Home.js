import React from 'react';
import Header from '../Header/Header';
import CustomerIcons from '../CustomerIcons/CustomerIcons';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div style={{marginTop: "0px", backgroundColor:"#E5E5E5"}}>
            <Header/>
            <CustomerIcons/>
            <Services/>
            <Works/>

        </div>
    );
};

export default Home;