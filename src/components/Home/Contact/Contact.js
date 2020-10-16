import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact-container">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12 col-md-6">
                        <p style = {{fontSize:"34px", fontWeight:"600"}}>Let us handle your <br/>project, professionally. </p>
                        <p style = {{fontSize:"15px", fontWeight:"400", color: "#707070"}}>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name/ company's name" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" cols="30" rows="10" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="btn btn-dark d-flex mr-auto py-2 px-5"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row py-5 copyWrite justify-content-center">
                    <p>Copyright Orange Lab {(new Date()).getFullYear()}</p>
                </div>
            </div>

        </section>
    );
};

export default Contact;