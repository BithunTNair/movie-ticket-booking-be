var express = require('express');
var adminRoutes = express.Router();

const {adminAuth}=require('../middlewares/authorization');
const { addMovie } = require('../controllers/adminController');

adminRoutes.post('/createmovie',adminAuth,addMovie)

module.exports= adminRoutes