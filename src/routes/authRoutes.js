var express = require('express');
var authRoutes = express.Router();

const {signup,signin} =require('../controllers/authController')

authRoutes.post('/signup',signup);
authRoutes.post('/signin',signin)

module.exports=authRoutes



