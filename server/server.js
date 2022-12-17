const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://felixljr:4U6CpjuN6mLaaJg9@cluster0.fhkemks.mongodb.net/CS_Mid_Solo?retryWrites=true&w=majority'
);




app.listen(3000);
