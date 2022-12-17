const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  sex: { type: String },
  reason: { type: String },
  conditions: { type: String },
  meds: { type: String },
  roll: { type: Number },
  crawl: { type: Number },
  walk: { type: Number },
  sit: { type: Number },
  talk: { type: Number },
  VMIRaw: { type: Number },
  VMIStand: { type: Number },
  VMIPR: { type: Number },
  VPRaw: { type: Number },
  VPStand: { type: Number },
  VPPR: { type: Number },
  MCRaw: { type: Number },
  MCStand: { type: Number },
  MCIPR: { type: Number },
  eval: { type: String },
});

module.exports = mongoose.model('Student', studentSchema)