const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./studentModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const { json } = require('express');
const StudentController = require('./controller/StudentController')
const template = require('./template')
require('dotenv').config()

//cors mainly for development since FE & BE are on different ports
app.use(cors());
//middleware that parses JSON in the body
app.use(express.json());

//connect to db(use an .env when functioning)
mongoose.connect(process.env.MONGO_URI);

app.post('/dashboard', StudentController.createEval, async (req, res) => {
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
      sit: req.body.sit,
      crawl: req.body.crawl,
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
      eval: res.locals.para,
    });
    return res.json({ status: 'ok - eval created' });
  } catch (err) {
     return res.json({ status: 'error: ', err });
  }
});

app.get('/dashboard/all', async (req, res) => {
  try {
    const records = await Student.find({});
    //console.log(records);
    //res.json({ status: 'ok - eval created' });
    return res.json(records);
  } catch (err) {
    return res.send('No records found.');
  }
});

app.get('/dashboard/completed/:name', async (req, res) => {
  try {
    const record = await Student.findOne({ firstName: req.params.name }).exec();
    return res.send(record.eval)
  } catch (err) {
    return res.send('No evaluations found for this student');
  }
})

app.post('/dashboard/completed', async (req, res) => {
  const filter = { firstName: req.body.name };
  const update = { eval: req.body.text };
  try {
    await Student.findOneAndUpdate(filter, update);
    return res.json({ status: 'eval updated' });
  } catch (err) {
    return res.json({ status: 'error: ', err });
  }
});

app.delete('/dashboard/completed/:name', async (req, res) => {
  try {
    await Student.findOneAndDelete({ firstName: req.params.name });
    return res.json({ status: 'record deleted' });
  } catch (err) {
    return res.json({ status: 'error: ', err });
  }
});

//listen placed within mongoose connection
mongoose.connection.once('open', () => {
  console.log('connected to MONGO');
  app.listen(3000, () => console.log(`Server running on port: 3000`));
});
//catch errors with mongoose/mongo
mongoose.connection.on('error', (err) => {
  console.log(err);
});
