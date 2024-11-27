// ye model jo hai  vo ek class hai joki mongose me hoti ahi
const {model} = require("mongoose");
const {PositionsSchema} = require("../schemas/PositionsSchema");
// yaha jab hum order likhre hai toh database me jab ye jata hai toh ye order se orders me convert ho jata hai isliye hamara collection of data store hota hai
const PositionsModel = new model("position",PositionsSchema);

module.exports = {PositionsModel };