//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));


//////////////////////////////////////// database connection DOCKER
const mongoHost = process.env.MONGO_HOST
const mongoPort = process.env.MONGO_PORT
const mongoDbName = process.env.DB_NAME

mongoose
  .connect(`mongodb://${mongoHost}:${mongoPort}/${mongoDbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.log(err));


/////////////////////////////////// database connection NORMAL
// mongoose
//   .connect(process.env.DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to the database!"))
//   .catch((err) => console.log(err));


// routes prefix
app.use("/api/post", require("./routes/routes"));

//start server
app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
