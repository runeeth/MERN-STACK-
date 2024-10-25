import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./App.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    axios.post("http://localhost:3001/logindet", { email: email, password: password })
      .then(res => {
        console.log(res)
        if (res.data.message === true) {
          alert("Welcome " );
          switch (res.data.user) {
            case "admin":
              navigate("/admindashboard");
              break;
            case "student":
              navigate("/studentdashboard");
              break;
           
            default:
              alert("Unexpected user status");
          }
        } else {
          alert("Incorrect username or password");
        }
      })
      .catch(err => {
        console.error(err);
        alert("An error occurred");
      });
  };

  return (
    <div className="container log ">
  <div className="row justify-content-center  " >
    <div className=" col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
      <div className="data border p-5 bg-light rounded shadow">
        <center>
          <h2 className="text-primary">Login</h2>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputStudentname" className="form-label">
              <span>Email</span>
            </label>
            <input
              type="email"
              id="inputStudentname"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              <span>Password</span>
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="m-4 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              <span>Login</span>
            </button>
          </div>
          <div className="m-4 d-flex justify-content-center">
            <Link to="/register">
              <button type="button" className="btn btn-secondary">
                <span>Register Now</span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}
