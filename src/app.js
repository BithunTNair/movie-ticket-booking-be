const express = require('express')
const app = express()
const port = 5000;
const authRoutes=require('./routes/authRoutes')
const adminRoutes=require('./routes/adminRoutes')
const DB= require('./config/db');
const dotenv=require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config()

;


app.use(express.json())
app.use(cookieParser())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth',authRoutes);
app.use('/admin',adminRoutes);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  DB()
})