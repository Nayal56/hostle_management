
// connecting backend to mysql database-----

const con=mysql.createConnection(
 {
  user: "root",
  host: "localhost",
  password: "",
  database: "hostle_mgnt",
 }
);
// query the database using the connection object
app.get("/users", (req, res) => {
  con.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
module.exports = con;