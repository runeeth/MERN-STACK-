import React from 'react'
import "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import Menu from 'd:/dashboard/dashboard/src/components/menu';
import { useNavigate } from "react-router-dom";


function Addstudent() {
    const [email, setEmail] = useState("");
    const [college, setCollege] = useState("");
    const [address, setAddress ] = useState("");
    const [pincode, setPincode] = useState("");
    const [landline, setLandline] = useState("");
    const [martialStatus, setMartialStatus] = useState("");
    const navigate = useNavigate();
    
    function handleSubmit(e)
    {
        e.preventDefault();
        
        axios.post("http://localhost:3000/postuserdetails",{ email:email,college:college,address:address,pincode:pincode,landline:landline,martialStatus:martialStatus,} )
        .then((res)=>{
            console.log(res);
          
            navigate("/");
          
        }
    
    )
        .catch((err)=> console.log(err));
    }  
    
 




    return (
        <div>
            <Menu />
            
            <div className="container">
                <center><div className="title text ">Add user</div></center>
                <div className="content mt-0">
                    <form onSubmit={handleSubmit} name= "reset-form">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">college</span>
                                <input className='form-control'  type="text" placeholder="Enter your name" onChange={(e)=>{setCollege(e.target.value)}} required />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span> <br />
                                <input  className='form-control' type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} required />
                            </div>
                            <div className="input-box">
                                <span className="details">address</span>
                                <input  className='form-control' type="text" placeholder="Enter address"  onChange={(e)=>{setAddress(e.target.value)}} required />
                            </div>
                            <div className="input-box">
                                <span className="details">pincode</span>
                                <input  className='form-control' type=" number" placeholder="Enter pincode"  onChange={(e)=>{setPincode(e.target.value)}} required />
                            </div>
                            <div className="input-box">
                                <span className="details">landline </span>
                                <input  className='form-control' type="number" placeholder="Enter your number" onChange={(e)=>{setLandline(e.target.value)}} required />
                            </div>
                            <div className="input-box">
                                <span className="details">martialStatus</span> <br />
                                <input  className='form-control' type="text" placeholder="Enter your status"  onChange={(e)=>{setMartialStatus(e.target.value)}} required />
                            </div> <br />
                            
                        </div>
                         
                        <center> <button type= "submit" className='btn btn-primary'> add </button></center> <br />

                         

                        <div className='moveto'>

                            <Link to={"/"}> <center><button className="btn btn-primary ">go to login</button></center></Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Addstudent