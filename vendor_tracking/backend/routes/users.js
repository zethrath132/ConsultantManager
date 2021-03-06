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

users.post('/signup', (req, res, next) =>
{
  console.log("sign up information: " + req.body + "\n");
  User.findOne({"username": req.body.user})
  .then(input =>
  {
    console.log("output from database: "+input+"\n");
    if(!input)
    {
      bcrypt.hash(req.body.password, 10)
      .then(hash =>
      {
        console.log("this is the hashed password: "+hash+"\n");
        const user = new Users(
        {
          username: req.body.username,
          password: req.body.password,
          role: req.body.role,
          phonenumber: req.body.phonenumber,
          fName: req.body.fName,
          lName: req.body.lName,
          joinDate: req.body.joinDate
        });
        user
        .save()
        .then(createdPost => {
          return res.status(200).json({
            message: "User added successfully!",
            returnObj: createdPost
          })
        .catch(err => {
          return res.status(500).json({
            message: err
          });
        });
      });
    });
  }
  else
  {
      console.log("Error: Username already exists!\n");
      return res.status(201).json({
        message: "Error: User already exists!"
      });
    }
  });
});

users.post('/addvendor', (req, res, next) =>
{
  Users.find({"username":req.body.username})
  .then(output =>
  {
    if(!input)
    {
      console.log("Error: no such user!\n")
      return res.status(201).json({
        message: "Error: user does not exist!"
      });
    }
    else
    {
      console.log(req.body.Vendor+"\n");
      const vendor = new Users({
        Vendor: {
          name: req.body.Vendor.name,
          email: req.body.Vendor.email,
          phonenumber: req.body.Vendor.email,
          interview: req.body.Vendor.interview,
          jobReq: req.body.Vendor.jobReq,
          calldate: req.body.Vendor.calldate,
          pass: req.body.Vendor.pass,
          vendorCompany: req.body.Vendor.vendorCompany,
          repCompany: req.body.Vendor.repCompany,
          salesSubmit: req.body.Vendor.salesSumbit
        }
      });
      vendor
      .save()
      .then(addedVendor =>
      {
        console.log("This is what's been added: \n"+addedVendor);
        return res.status(200).json({
          message: "Vendor has been added."
        });
      });
    }
  });
});

//////////////////////////////////////////////////////////////////////////////////////////
//This is a test pull.  Pulls all data.  Only use this if you need to check all the data//
//////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////
//This is a test api link.  Use this to bulk store information///
/////////////////////////////////////////////////////////////////
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
      message:"User Data added properly!",
      post_id: createdPost._id
    });
  });
});



module.exports = users;
