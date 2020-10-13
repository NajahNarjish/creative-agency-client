import React from 'react';
import frame from "../../../images/logos/Frame.png";
import "./HeaderBanner.css"

const HeaderBanner = () => {
    return (
        <section className = "headerBannerContainer container">
            <div className="row">
                <div className="col-12 col-md-5 mt-5 pt-5">
                    <h1>Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
                    <p className="pt-3">Lorem, ipsum dolor sit amet consectetur <br/>adipisicing  elit. Sit officiis doloremque <br/>praesentium dolore.</p>
                    <button className="btn btn-dark mt-3">Hire Us</button>
                </div>
                <div className="col-12 col-md-7 mt-5 pt-5">
                    <img class="img-fluid" src={frame} alt="pic"/>
                </div>
            </div>

        </section>
    );
};

export default HeaderBanner;