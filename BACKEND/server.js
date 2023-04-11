const express = require("express");
const expressApp = require("./app");
const cors = require("cors");
const dotenv = require("dotenv");

//CREATING A WEB SERVER WITH EXPRESS INSTANCE

const server = express();
const PORT = 4000;

//CONFIGURATION FOR EVN INSTANCE

dotenv.config();

//INJECT DATABASE CODE

require("./dbconfig");

//IMPORT AND REGISTER THE EXPRESS APPLICATION 

server.use("/", expressApp);

//START THE SERVER AND LISTEN TO THE PORT NO {4000}

server.listen(PORT, ()=>{
    console.log(`SERVER STARTED PORT:${4000}`)
})