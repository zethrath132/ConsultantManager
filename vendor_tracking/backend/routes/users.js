const express = require('express');
const http = require('http');
const app = express();
const multer = require('multer');
const users = express.Router();
const bodyParser = express.json();
const mongoose = require("mongoose");
const Users = require("./userSchema");

mongoose
.connect(
   "mongodb+srv://LoWeiBen:OnolSCbqAGPUxA3l@testcluster-0d17r.mongodb.net/ConsultantManager?retryWrites=true", { useNewUrlParser: true })
//console logs if connection is successful
.then(() => {
  console.log("Connected to Product Database!");
})
//console logs if it fails
.catch(() => {
  console.log("Connection failed!");
});

users.use(bodyParser);

users.get('/getalldata',(req,res,next)=>
{
  console.log(req.body);
  Users.find({}).then(input =>
  {
   console.log(input);
   let responseArr = input;
    return res.status(200).json({
      message:"success",
      input:responseArr
    });
  });
});

users.post('/addalldata',(req,res,next)=>
{
  console.log(req.body);
  const user = new Users({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    fName: req.body.fName,
    lName: req.body.lName,
    Salesperson.name: req.body.Salesperson.name,
    Salesperson.email: req.body.Salesperson.email,
    Salesperson.phonenumber: req.body.Salesperson.phonenumber,
    Salesperson.jobReq.reqName: req.body.Salesperson.jobReq.reqName,
    Salesperson.jobReq.jobRequirement: req.body.Salesperson.jobReq.jobRequirement,
    Vendor.name: req.Vendor.name,
    Vendor.email: req.Vendor.email,
    Vendor.phonnumber: req.Vendor.phonenumber,
    Vendor.interview: req.Vendor.interview,
    Vendor.jobReq: req.Vendor.jobReq,
    Vendor.calldate: req.Vendor.calldate,
    Vendor.pass: req.Vendor.pass,
    Vendor.vendorCompany: req.Vendor.vendorCompany,
    Vendor.repCompany: req.Vendor.repCompany,
    Client.name: req.Client.name,
    Client.email: req.Client.email,
    Client.phone: req.Client.phone,
    Client.interview: req.Client.interview,
    Client.pass: req.Client.pass,
    Client.company: req.Client.company,
    Client.location: req.Client.location,
    Client.interviewDate: req.Client.interviewDate,
    Reference.name: req.Reference.name,
    Reference.email: req.Reference.email,
    Reference.password: req.Reference.password,
    Reference.phone: req.Reference.phone,
    Reference.project: req.Reference.project,
    Reference.projectRole: req.Reference.projectRole
  });
  console.log(users);
  users.
  .save()
  .then(createdPost =>{
    return res.status(201).json(
      {
        message:"Product Data added properly!",
        post_id: createdPost._id
      });
  });
});

// attempting to add new columns to the existing db
// post.post('/addCols', (req, res, next) =>
// {
//   for (let i = 0; i < req.body.length; i++)
//   {
//     posts.aggregate([
//       {
//         $addFields : { "$req.body.fieldName" : "$req.body.typeDrop" }
//       }
//     ]);
//     posts
//     .save()
//     .then (() => {
//       return res.status(201).json (
//         {
//           message: "Columns added"
//         }
//       );
//     });
//   }
// });

module.exports = users;
