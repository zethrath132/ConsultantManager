const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  //User's username.  Will always be unique
  username: { type: String, required: true, unique: true },
  //User's password.  Will be saved hashed
  password: { type: String, required: true },
  //User's batch/role within Itlize
  role: { type: String, required: true },
  //User's phone number
  phonenumber: { type: String, required: true },
  //User's email
  email: { type: String, required: true, unique: true },
  //User's first name
  fName: { type: String, required: true },
  //User's last name
  lName: { type: String, required: true },
  //Salesperson's information
  Salesperson: {
    //Their name
    name: { type: String },
    //Their email
    email: { type: String },
    //Their phone number
    phonenumber: { type: String },
    //Their job requirements that they've sent you
    jobReq: {
      //company that is putting out the requirement
      reqName: { type: String },
      //the requirement description
      jobRequirement: { type: String }
    }
  },
  //Vendor's information
  Vendor: {
    //Vendor's name
    name: { type: String },
    //Vendor's email
    email: { type: String },
    //Vendor's phone number
    phonenumber: { type: String },
    //The interview type set up with the Vendor
    interview: { type: String },
    //The Vendor's job Requirement
    jobReq: { type: String },
    //When the interview is supposed to happen
    calldate: { type: Date },
    //If the consultant has passed or not
    pass: { type: String },
    //The company that the vendor is working for
    vendorCompany: { type: String },
    //The name of Vendor's client corporation
    repCompany: { type: Array },
    //Which salesperson submitted the user's resume to this vendor
    salesSubmit: { type: String }
  },
  //The contacting client
  Client: {
    //Client Name
    name: { type: String },
    //Client email
    email: { type: String },
    //Client phone number
    phone: { type: String },
    //Interview type with the Client
    interview: { type: String },
    //Whether the user passed the interview or not
    pass: { type: String },
    //The client's company name
    company: { type: String },
    //The company's address
    location: { type: String },
    //When the interview is supposed to take place
    interviewDate: { type: Date }
  },
  //User's reference data
  Reference: {
    //The reference name
    name: { type: String },
    //The reference's email
    email: { type: String },
    //The reference's email password
    password: { type: String },
    //The reference's phone number
    phone: { type: String },
    //The project the reference worked on with user
    project: { type: String },
    //Their role in that project
    projectRole: { type: String }
  },
  joinDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', userSchema);
