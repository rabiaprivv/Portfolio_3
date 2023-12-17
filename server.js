const e = require("express");
const app = e()
require('dotenv').config()
const Port = process.env.PORT
app.listen(Port, () =>{
console.log(`The server is listening on port ${Port}`);

})