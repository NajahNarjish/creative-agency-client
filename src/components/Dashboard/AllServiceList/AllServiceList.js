import React, { useEffect, useState } from 'react';
import ServicePerPerson from '../ServicePerPerson/ServicePerPerson'



const AllServiceList = () => {
    const [allServiceList, setAllServiceList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/showAllServiceList")
            .then(res => res.json())
            .then(data => setAllServiceList(data))
    }, [])

    return (
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-10 bg-light p-5">
                    <div class="bg-white">
                        <h2 class = "text-center mb-5 pt-3">Services list</h2>
                        <table class="table table-striped">
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
        </div>

    );
};

export default AllServiceList;