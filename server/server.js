const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const students = require('./models'); // Import your student model

const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both origins
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/schooldatabase");

app.listen(3001, () => {
  console.log("Server is running");
});

// Login route

app.post('/logindet', (req, res) => {
    const { email, password } = req.body;
  
    students.findOne({ email: email })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: "Student does not exist" });
        }
  
        if (user.password === password && user.status === "admin") {
        //   req.session.user = { email: user.email, status: user.status };//
          return res.status(200).json({ message: true, user: user.status });
        }
  
        if (user.password === password && user.status === "student") {
        //   req.session.user = { email: user.email, status: user.status };//
          return res.status(200).json({ message: true, user: user.status, });
        }
        if (user.password === password && user.status === "staff") {
        //   req.session.user = { email: user.email, status: user.status };//
          return res.status(200).json({ message: true, user: user.status,  });
        }
        else {
          return res.status(401).json({ message: "Incorrect username or password" });
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        return res.status(500).json({ message: "Internal server error" });
      });
  });
  



  app.post('/poststudentdetails', async (req, res) => {
    const student = new students(req.body);
    try {
      await student.save();
      res.status(201).send(student);                                                  //register//
  
    } catch (error) {
      res.status(400).send(error);
    }
  })
  

                                                    ///admin//

                                                    app.get("/viewstudent", async (req, res) => {
                                                      try {
                                                          const student = await students.find({ status: "student" });
                                                          console.log(student); // ADMIN VIEW STUDENTS
                                                          res.json(student);
                                                      } catch (err) {
                                                          res.status(500).json({ message: err.message });
                                                      }
                                                  });
                                                  
// app.get("/viewsstudent", (req,res)=>{
//   const student =  students.find({status:"student"})
//   .then(res =>{res.json(student)}).catch(err=>console.log(err))  
// })


//   //  TO GET DETAILS FROM DATABASE USING FIND() FUNCTION . /d
app.get("/getstudentdetail/:id", async (req, res) => {
  try {
    const id = req.params.id; // Extracting student ID from request parameters
    const student = await students.findOne({_id:id});

    if (student) {
      res.json(student); // Return the student details if found
    } else {
      res.status(404).json({ message: "Student not found" }); // Handle case where student isn't found
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle server errors
  }
});


// updating student details /d
app.patch('/updatestudentdetail/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body; // Fields to update

    const updatestudent = await students.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
      runValidators: true // Ensure the update passes validation rules
    });

    if (updatestudent) {
      res.json(updatestudent); // Return the updated student details
    } else {
      res.status(404).json({ message: "User not found" }); // Handle case where user isn't found
    }
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle validation errors
  }
});


// // d 
// app.post('/poststudentdetails', async (req, res) => {
//   const uservar = new students(req.body);
//   try {
//     await uservar.save();
//     res.status(201).send(uservar);                                                     //ADMIN POST  STUDENTS DETAILS //

//   } catch (error) {
//     res.status(400).send(error);
//   }
// })


// // /d
app.delete('/deletestudentdetails/:id', (req, res) => {
  const id = req.params.id;
  students.findByIdAndDelete({ _id: id })                                               //ADMIN DELETES STUDENTS//
    .then(res => res.json(res)).catch(err => { res.json(err) });

})
