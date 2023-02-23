const express = require("express")
const {getAllStudent, getSingleStudent, createNewStudent, updateOne,deleteOne} = require("../controlllers/student")

const router =  express.Router()

//to get all student's data
router.get("/", getAllStudent)

//to get single student data
router.get("/:id" , getSingleStudent)

//to create new student
router.post("/", createNewStudent)

//to update one student
router.put("/:id", updateOne)

//to delete one student
router.delete("/:id", deleteOne)

module.exports = router