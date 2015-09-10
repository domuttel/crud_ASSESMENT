var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Human = new Schema(
{
  name: String,
  age: Number,
  ethnicity: String
}
);

//humans is the collections, Human is the schema
module.exports = mongoose.model('humans', Human);