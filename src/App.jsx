import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './registration';
import Login from './login';
import Admin from './ADMIN/admindashboard';
import Student from './studentdashboard';
import Viewstudent from './ADMIN/viewstudents';
import Updatestudent from './ADMIN/updatestudent';
import Addstudent from './ADMIN/addstudent';
import Deletestudent from './ADMIN/deletestudent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/viewstudents" element={<Viewstudent/>}></Route>

        <Route path="/admindashboard" element={<Admin />}></Route>
        
        <Route path= "/updatestudent/:id" element={<Updatestudent/>}></Route>
        <Route path="/deletestudent/:id" element={<Deletestudent />}></Route>
        <Route path="/addstudent" element={<Addstudent />}></Route>
        
        <Route path="/studentdashboard" element={<Student />}>
       
        </Route>
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
