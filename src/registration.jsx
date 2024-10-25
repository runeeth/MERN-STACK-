import React, { useState } from 'react';
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState("");
    const [rollno, setRollno] = useState("");
    const [email, setEmail] = useState("");
    const [pno, setPno] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
      
        axios.post('http://localhost:3001/poststudentdetails', {
          username,
          rollno,
          email,
          phonenumber: pno,
          password,
          status
        })
        .then(  res=> {  window.location.reload();
        }           
        )
        .catch(err => console.log(err));
      }

    return (


<div className="container">
    <div className='row justify-content-center '>
        <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4'>
            <div className="content border p-4 rounded shadow" style={{ backgroundColor: '#f9f9f9' }}>
                <center>
                    <h2 className='heading text-primary'>REGISTRATION</h2>
                </center>
                <form onSubmit={handleSubmit} className='p-3'>
                    <div>
                        <span className="details text-success">Username</span><br />
                        <input type="text" placeholder="Enter your name" className='form-control mb-3' onChange={(e) => setUsername(e.target.value)} required style={{ borderColor: '#007bff' }} />
                        
                        <span className="details text-success">Roll No</span><br />
                        <input type="text" placeholder="Enter your roll number" className='form-control mb-3' onChange={(e) => setRollno(e.target.value)} required style={{ borderColor: '#007bff' }} />
                        
                        <span className="details text-success">Email</span><br />
                        <input type="email" placeholder="Enter your email" className='form-control mb-3' onChange={(e) => setEmail(e.target.value)} required style={{ borderColor: '#007bff' }} />
                        
                        <span className="details text-success">Phone Number</span><br />
                        <input type="text" placeholder="Enter your number" className='form-control mb-3' onChange={(e) => setPno(e.target.value)} required style={{ borderColor: '#007bff' }} />
                        
                        <span className="details text-success">Status</span><br />
                        <input type="text" placeholder="Enter your status" className='form-control mb-3' onChange={(e) => setStatus(e.target.value)} required style={{ borderColor: '#007bff' }} />
                        
                        <span className="details text-success">Password</span><br />
                        <input type="password" placeholder="Enter your password" className='form-control mb-3' onChange={(e) => setPassword(e.target.value)} required style={{ borderColor: '#007bff' }} />
                        
                        <span className="details text-success">Confirm Password</span><br />
                        <input type="password" placeholder="Confirm your password" className='form-control mb-3' required style={{ borderColor: '#007bff' }} />
                    </div>
                    <br />
                    <div className="button d-flex justify-content-center">
                        <button type='submit' className='btn btn-primary btn-lg'><span>Register</span></button>
                    </div>
                    <div className="button d-flex justify-content-center">
                         <span >Already have an account </span> &nbsp;  <Link to="/login "> <span>login</span></Link>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    </div>
</div>
    );
}

export default Register;
