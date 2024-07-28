var express = require('express');
var adminRoutes = express.Router();

const {adminAuth}=require('../middlewares/authorization')

adminRoutes.post('/createmovie',adminAuth)

module.exports= adminRoutes