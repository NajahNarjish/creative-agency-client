import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AdminAddService = () => {
    const [loggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        // console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section>
            <div className="row ">
                <div class="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 ">
                    <div className="d-flex justify-content-between">
                        <h3 class="mt-5 mb-4">Add a Service</h3>
                        <h6 className="m-5" style={{ marginLeft: "5px" }}>{loggedInUser.displayName || loggedInUser.name}Login</h6>
                    </div>

                    <div className="bg-light p-5 " style={{ height: "100vh" }}>
                        <form onSubmit={handleSubmit}>
                            <div className="p-5 mr-5 bg-white row" style = {{borderRadius:"20px"}}>
                                <div className = "col-md-6">
                                    <div className="form-group">
                                        <label for="title">Service Title</label>
                                        <input onBlur={handleBlur} id="title" type="text" className="form-control" name="title" placeholder="Enter Title" />
                                    </div>
                                    <div className="form-group">
                                        <label for="description">Description</label>
                                        <textarea onBlur={handleBlur} id="description" type="text" cols="30" rows="4" className="form-control" name="description" placeholder="Description" ></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>Icon</label>
                                    <div class="input-group">
                                        <label class="input-group-btn">
                                            <span style = {{backgroundColor: '#DEFFED'}}class="btn btn-outline-success ">
                                                Upload image <input type="file" style={{display: "none"}} multiple/>
                                            </span>
                                        </label>   
                                    </div>
                                </div>
                            </div>
                            <div className = "d-flex justify-content-end mr-5 mt-3">
                            <button type="submit" className="btn btn-success ">Submit</button>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminAddService;