import React from 'react';
import Header from '../Header/Header';
import CustomerIcons from '../CustomerIcons/CustomerIcons';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div style={{marginTop: "0px"}}>
            <Header/>
            <CustomerIcons/>
            <Services/>

        </div>
    );
};

export default Home;