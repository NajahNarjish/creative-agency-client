import React from 'react';
import "./SingleOrder.css"

const SingleOrder = (props) => {
    const {serviceName, detail, status}  = props.order;

    return (
        <div>
            <div className="col-6 col-md-4 mb-5 order-container">
            <div class="card p-3 order-div bg-white ">
                    {/* <img className="card-img-top rounded-circle img-fluid w-25 p-2" src={}  alt="CardProfile"></img> */}
                    <div className=" d-flex justify-content-between">
                        <h2 className = "heading ">{serviceName}</h2> 
                        <p className = "statusBar btn-info py-1 px-2 text-center rounded">{status}</p>
                    </div>
                <div >
                    <p class="font-weight-bold">Project Details:</p>
                    <p className="card-text description ">{detail}</p>
                </div>
            </div>
        </div>
            
    

        </div>
    );
};

export default SingleOrder;