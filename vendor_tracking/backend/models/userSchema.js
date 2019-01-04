const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  phonenumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  Salesperson: {
    name: { type: String },
    email: { type: String },
    phonenumber: { type: String },
    jobReq: {
      //company that is putting out the requirement
      reqName: { type: String },
      //the requirement description
      jobRequirement: { type: String }
    }
  },
  Vendor: {
    name: { type: String },
    email: { type: String },
    phonenumber: { type: String },
    interview: { type: String },
    jobReq: { type: String },
    calldate: { type: Date },
    pass: { type: String },
    vendorCompany: { type: String },
    repCompany: { type: Array }
  },
  Client: {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    interview: { type: String },
    pass: { type: String },
    company: { type: String },
    location: { type: String },
    interviewDate: { type: Date }
  },
  Reference: {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    project: { type: String },
    projectRole: { type: String }
  }
});

module.exports = mongoose.model('Users', userSchema);
