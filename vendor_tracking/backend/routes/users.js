const express = require('express');
const http = require('http');
const app = express();
//const multer = require('multer');
const users = express.Router();
const bodyParser = express.json();
const mongoose = require("mongoose");
const Users = require("../models/userSchema");

mongoose
.connect(
   "mongodb+srv://LoWeiBen:OnolSCbqAGPUxA3l@testcluster-0d17r.mongodb.net/ConsultantManager?retryWrites=true", { useNewUrlParser: true })
//console logs if connection is successful
.then(() => {
  console.log("Connected to Consultant Manager Database!");
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
    Salesperson: {
      name: req.body.Salesperson.name,
      email: req.body.Salesperson.email,
      phonenumber: req.body.Salesperson.phonenumber,
      jobReq: {
        reqName: req.body.Salesperson.jobReq.reqName,
        jobRequirement: req.body.Salesperson.jobReq.jobRequirement
      },
    },
    Vendor: {
      name: req.body.Vendor.name,
      email: req.body.Vendor.email,
      phonenumber: req.body.Vendor.phonenumber,
      interview: req.body.Vendor.interview,
      jobReq: req.body.Vendor.jobReq,
      calldate: req.body.Vendor.calldate,
      pass: req.body.Vendor.pass,
      vendorCompany: req.body.Vendor.vendorCompany,
      reqCompany: req.body.Vendor.reqCompany
    },
    Client: {
      name:  req.body.Client.name,
      email: req.body.Client.email,
      phone: req.body.Client.phone,
      interview: req.body.Client.interview,
      pass: req.body.Client.pass,
      company: req.body.Client.company,
      location: req.body.Client.location,
      interviewDate: req.body.Client.interviewDate
    },
    Reference: {
      name:  req.body.Reference.name,
      email:  req.body.Reference.email,
      password:  req.body.Reference.password,
      phone: req.body.Reference.phone,
      project:  req.body.Reference.project,
      projectRole:  req.body.Reference.projectRole
    }
  });
  console.log(user);
  user
  .save()
  .then(createdPost => {
    return res.status(201).json(
      {
        message:"Product Data added properly!",
        post_id: createdPost._id
      });
  });
});



module.exports = users;
