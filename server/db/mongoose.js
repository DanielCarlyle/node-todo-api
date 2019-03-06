var mongoose = require('mongoose');
//will use Promises instead of Callbacks
//use the built-in Promise Library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//module.exports = {
  //mongoose: mongoose
  //};

//ES6 Structure
  module.exports = {mongoose};
