const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app= express();
app.use(express.json());
app.use(cors());

// import the database connection object
const { con } = require('./db');


// define a route for handling POST requests to /register

app.post('/register', (req,res) =>{
    const {rollno,name,mobile, gender, email, dept, year, pass } = req.body;
  
  
  
    const query = `INSERT INTO users (rollno, name, mobile, gender, email, dept, year, pass) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

      // execute the SQL query using the connection object
       con.query(query, [rollno, name, mobile, gender, email, dept, year, pass], (err, result) => {

    if (err) {
        console.error(err);
        res.status(500).send('Registration failed. Please try again later.');
      } else {
        console.log(result);
        res.status(200).send('Registration successful!');
        }
    });
});



app.post('/LOGIN', (req,res) =>{
    const rollno=req.body.rollno;
    const pass=req.body.pass;
  
  
  
    con.query("SELECT * FROM students WHERE rollno =? AND pass=?",[rollno,pass],
    (err, result)=> {
      if(err){
        req.setEncoding({err:err});
      }
      else{
        if(result.length>0){
          res.send(result);
        }else{
          res.send("WRONG Roll Number OR Password")
    
        }
      }
    });
  });

  // start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
  