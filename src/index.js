require("dotenv").config() 
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const studentRouter = require("./routes/student")
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))
})
.catch((error) => {
    console.log(error)
})

app.use('/api/student' , studentRouter) 




