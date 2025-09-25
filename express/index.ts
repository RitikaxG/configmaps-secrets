require("dotenv").config({
    path:"./secret/.env"
}) // Get the env variable from this dir

import express from "express"
const app = express()

console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
