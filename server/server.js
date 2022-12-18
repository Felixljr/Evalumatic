const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./studentModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const { json } = require('express');

//cors mainly for development since FE & BE are on different ports
app.use(cors());
//middleware that parses JSON in the body
app.use(express.json());

//connect to db (use an .env when functioning)
mongoose.connect(
  'mongodb+srv://felixljr:4U6CpjuN6mLaaJg9@cluster0.fhkemks.mongodb.net/CS_Mid_Solo?retryWrites=true&w=majority'
);

app.post('/dashboard', async (req, res) => {
  try {
    await Student.create({
      firstName: req.body.fname,
      lastName: req.body.lname,
      age: req.body.age,
      sex: req.body.sex,
      reason: req.body.reason,
      conditions: req.body.condition,
      meds: req.body.meds,
      roll: req.body.roll,
      crawl: req.body.sit,
      walk: req.body.walk,
      talk: req.body.words,
      VMIRaw: req.body.rawVMI,
      VMIStand: req.body.scVMI,
      VMIPR: req.body.prVMI,
      VPRaw: req.body.rawVP,
      VPStand: req.body.scVP,
      VPPR: req.body.prVP,
      MCRaw: req.body.rawMC,
      MCStand: req.body.scMC,
      MCIPR: req.body.prMC,
    });
    return res.json({ status: 'info sent - ok' });
  } catch (err) {
     return res.json({ status: 'error: ', err });
  }
});

app.get('/dashboard/completed/', (req, res) => {
  // console.log(req);
  
})

//listen placed within mongoose connection
mongoose.connection.once('open', () => {
  console.log('connected to MONGO');
  app.listen(3000, () => console.log(`Server running on port: 3000`));
});
//catch errors with mongoose/mongo
mongoose.connection.on('error', (err) => {
  console.log(err);
});
