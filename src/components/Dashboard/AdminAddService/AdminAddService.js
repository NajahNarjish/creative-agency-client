import React, { useState } from 'react';

const AdminAddService = () => {
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
        <section className = 'container-fluid row'>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="title">Service Title</label>
                        <input onBlur={handleBlur} id = "title" type="text" className="form-control" name="title" placeholder="Service Title" />
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input onBlur={handleBlur} id = "description" type="text" className="form-control" name="description" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label for="image">Icon</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="image" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            

        </section>
    );
};

export default AdminAddService;