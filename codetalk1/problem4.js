// VALIDATION JS
//Imported express validator  and the "check" function is takenout from libray 
const { check } = require('express-validator');
//an array of validation for validating user input during signing up and 
//chceks no fields are empty and if the email is a valid email and that the password 
// meets requirements 
exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
// an array of validation for validating user input when logging in 

exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]


//SERVER JS
//imported modules 
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//express app is assigned and created to the app variable 
const { signupValidation, loginValidation } = require('./validation.js');
const app = express();
//.json is used to Parse 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
//handles requests from different domains 
app.use(cors());
//GET route is defined for the root of url 
app.get('/', (req, res) => {
    res.send('Node js file upload rest apis');
 });
 //Post route//used for user registration 
 app.post('/register', signupValidation, (req, res, next) => {
   // your registration code
 });
 //Post route// used for user login 
 app.post('/login', loginValidation, (req, res, next) => {
   // your login code
 });
 // Handling Errors
 app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
 });
 // message is logged to console once server is running 
 app.listen(3000,() => console.log('Server is running on port 3000'));
 