import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServicePerPerson from '../ServicePerPerson/ServicePerPerson'
import Sidebar from '../Sidebar/Sidebar';

const AllServiceList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [allServiceList, setAllServiceList] = useState([]);

    useEffect(() => {
        fetch("https://secret-escarpment-44361.herokuapp.com/showAllServiceList")
            .then(res => res.json())
            .then(data => setAllServiceList(data))
    }, [])

    return (
        <section>
            <div className="row">
                <div class="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 ">
                    <div className="d-flex justify-content-between">
                        <h3 class="mt-5 mb-4">All Services List</h3>
                        <h6 className="m-5" style={{ marginLeft: "5px" }}>{loggedInUser.displayName || loggedInUser.name}</h6>
                    </div>
                    <div className="bg-light row" style={{ height: "100vh" }}> 
                            <table class="table table-striped bg-white m-5">
                                <thead>
                                    <tr class = "text-center">
                                        <th scope="col"> Name</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Project Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allServiceList.map(item => <ServicePerPerson service={item}></ServicePerPerson>) 
                                    }
                                </tbody>
                            </table> 
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AllServiceList;