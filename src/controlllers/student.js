const Student = require("../models/student")
const mongoose =  require("mongoose")

const getAllStudent = async (req,res) => {
    const allstudents = await Student.find({}).sort({created_At : -1})
    res.status(200).json(allstudents)
}

const getSingleStudent = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error : "Id is Invalid"
        })
    }
    const student = await  Student.findById(id)
    if(!student){
        return res.status(400).json({
            error : "No Such Id"
        })
    }
    res.status(200).json(student)
}

const createNewStudent = async (req,res) => {
    const {name, currentClass, division} = req.body
    try{
       const student = await Student.create({name, currentClass, division}) 
       res.status(200).json(student) 
    }
    catch(error){
       res.status(400).json({error : error.message})
    }
}

const updateOne = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error : "Id is Invalid"
        })
    }
    const student = await  Student.findOneAndUpdate(id)
    if(!student){
        return res.status(400).json({
            error : "No Such Id"
        })
    }
    res.status(200).json(student)
}
 

const deleteOne = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error : "Id is Invalid"
        })
    }
    const student = await  Student.findByIdAndDelete(id)
    if(!student){
        return res.status(400).json({
            error : "No Such Id"
        })
    }
    res.status(200).json(student)
}

module.exports = {
    getAllStudent,
    getSingleStudent,
    createNewStudent,
    updateOne,
    deleteOne
}