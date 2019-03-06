var mongoose = require('mongoose');

//User Model
var User = mongoose.model('Users', {
   email: {
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

module.exports = {User};
