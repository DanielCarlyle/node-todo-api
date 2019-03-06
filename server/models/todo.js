var mongoose = require('mongoose');

//Create a Model for Todos
var Todo = mongoose.model('Todos', {
   text: {
     type: String,
     //set up validators
     required: true,
     minlength: 1,
     trim: true
   },
   completed: {
     type: Boolean,
     default: false
   },
   completedAt: {
     type: Number,
     default: null
   }
});

module.exports = {Todo};
