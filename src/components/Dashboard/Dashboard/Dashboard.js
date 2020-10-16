import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderForm from '../OrderForm/OrderForm';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    
    return (
            <section>
                <div className="row ">
                    <div class="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10 ">
                        <div className="d-flex justify-content-between">
                            <h3 class="mt-5 mb-4">Place Your Order Here</h3>
                            <h6 className="m-5"style = {{marginLeft:"5px"}}>{loggedInUser.displayName || loggedInUser.name}</h6>
                        </div>
                        <OrderForm/>    
                    </div>  
                </div>
            </section>  
    );
};

export default Dashboard;

