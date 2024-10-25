import { useEffect, } from 'react';

import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function student() {

  const navigate = useNavigate();
  const {id} = useParams();


  useEffect(() => {
    console.log(id);
    axios.delete(`http://localhost:3001/deletestudentdetails/${id}`).
      then(res => {
        console.log(res)

      })
      .catch(err => console.log(err));
    navigate("/viewstudents");

  })



  return (
    <div>
      
    </div>
  )
}
