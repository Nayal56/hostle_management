const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app= express();
app.use(express.json());
app.use(cors());
// connecting backend to mysql database-----

const con=mysql.createConnection(
 {
  user: "root",
  host: "localhost",
  password: "",
  database: "hostle_mgnt",
 }
);
con.connect(function(err) {
  if(err) {
      console.log("Error in Connection");
  } else {
      console.log("Connected");
  }
})
// query the database using the connection object
app.get('/students', (req, res) => {
  con.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching data from the database');
    } else {
      console.log(results);
      res.send(results);
    }
  });
});


// start the server
app.listen(8090, () => {
  console.log("Server started on port 8090");
});
module.exports = con;