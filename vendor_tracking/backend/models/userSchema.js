const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  phonenumber: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  Salesperson: {
    name: { type: String },
    email: { type: String },
    phonenumber: { type: Number },
    jobReq: {
      reqName: { type: String },
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
    pass: { type: Boolean },
    vendorCompany: { type: String },
    repCompany: { type: Array }
  },
  Client: {
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    interview: { type: String },
    pass: { type: Boolean },
    company: { type: String },
    location: { type: String },
    interviewDate: { type: Date }
  },
  Reference: {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: Number },
    project: { type: String },
    projectRole: { type: String }
  }
});

module.exports = mongoose.model('Users', userSchema);
