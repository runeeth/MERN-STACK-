import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../menubar'; // Assuming you have a Navbar component

function Updatestudent() {
    const [data, setData] = useState({
        studentname: "",
        email: "",
        password: "",
        phonenumber: "",
        rollno: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details when component mounts or `id` changes
        axios.get(`http://localhost:3001/getstudentdetail/${id}`)
            .then(res => {
                console.log('Fetched student details:', res.data); // Log the fetched data
                setData(res.data); // Set the state with the fetched data
            })
            .catch(err => console.error('Error fetching student details:', err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:3001/updatestudentdetail/${id}`, data)
            .then(response => {
                console.log('Update successful:', response);
                navigate("/viewstudents");
            })
            .catch(error => console.error('Error updating student details:', error));
    };

    return (
        <div>
            <Navbar />
            <div className='container mt-4'>
                <h1 className="text-center text-primary">Update Student Data</h1>
                <div className='col-md-6 mx-auto border p-4 shadow rounded bg-light'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Student Name</label>
                            <input
                                className='form-control'
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                className='form-control'
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                className='form-control'
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input
                                className='form-control'
                                type="tel"
                                name="phonenumber"
                                value={data.phonenumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Roll No</label>
                            <input
                                className='form-control'
                                type="text"
                                name="rollno"
                                value={data.rollno}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type='submit' className='btn btn-primary w-100'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Updatestudent;
