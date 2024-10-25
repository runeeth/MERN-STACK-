import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../menubar';

function Viewstudent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/viewstudent');
                setData(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Student Details</h2>
                <div className="row">
                    {data.length > 0 ? (
                        data.map((value) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={value._id}>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title">{value.username}</h5>
                                        <p className="card-text">Roll No: {value.rollno}</p>
                                        <p className="card-text">Phone No: {value.phonenumber}</p>
                                        <p className="card-text">Email: {value.email}</p>
                                        <Link to={`/updatestudent/${value._id}`}>
                                            <button className='btn btn-primary btn-sm'>Update</button>
                                        </Link>
                                        <Link to={`/deletestudent/${value._id}`}>
                                            <button className='btn btn-danger btn-sm ms-2'>Delete</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <div className="alert alert-warning text-center">No student data available</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Viewstudent;
