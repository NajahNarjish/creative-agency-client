import React from 'react';
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Works.css"

const Works = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        appendDots: dots => (
            <div>
              <ul > {dots} </ul>
            </div>
          ), 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div style = {{backgroundColor: "#111430", paddingBottom: "100px"}}>  
            <section className="container work-container">
            <p style={{ fontSize: "34px", fontWeight: "600", textAlign: "center", padding: "60px 0 30px", color: "#FFFFFF" }}>Here are some of <span style={{ color: "#7AB259" }}>our works</span></p>
            <div>   
                <Slider {...settings}>
                    <div className= "p-3">
                        <img className="img-fluid rounded " src={carousel1} alt="pic" />
                    </div>
                    <div className= "p-3">
                        <img className="img-fluid rounded" src={carousel2} alt="pic" />
                    </div>
                    <div className= "p-3">
                        <img className="img-fluid rounded" src={carousel3} alt="pic" />
                    </div>
                    <div className= "p-3">
                        <img className="img-fluid rounded" src={carousel4} alt="pic" />
                    </div>
                    <div className= "p-3">
                        <img className="img-fluid rounded" src={carousel5} alt="pic" />
                    </div>
                </Slider>
            </div>
        </section>
        </div>
    );
};

export default Works;