const mongoose = require("mongoose")

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    currentClass : {
        type : Number,
        required : true
    },
    division : {
        type : String,
        required : true
    }

})
 
module.exports = mongoose.model("Student", studentSchema)