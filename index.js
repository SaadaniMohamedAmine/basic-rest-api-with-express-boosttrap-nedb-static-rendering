//javascript
const express = require("express");
const port = 3001;
const Datastore = require("nedb");

const app = express();

//database
const database = new Datastore("database.db");
database.loadDatabase();

//middleware
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

//routes

app.get("/users", (req, res) => {
  let data;
  database.find({}, (err, docs) => {
    res.json({
      msg: "This is all the users",
      users: docs,
    });
  });
});
app.post("/users", (req, res) => {
  const data = { ...req.body, timestamp: Date.now() };
  database.insert(data);
  res.json({
    msg: "Data sent to server !",
    status: 200,
    data: req.body,
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is listenign on port ${port}...`);
});
