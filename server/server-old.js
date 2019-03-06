var {mongoose} = require('./db/mongoose');

//Create a Model for everything we want to store
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
//create a new Constructor Function
var newTodo = new Todo({
  text: 'Cook Breakfast',
  completed: true,
  completedAt: 1200
});

//Call a Method on newTodo
newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo')
})

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


//create a new Constructor Function
var newUser = new User({
  email: 'test@test.ca',
  completed: true,
  completedAt: 12
});

//Call a Method on newTodo
newUser.save().then((doc) => {
  console.log('User Saved', doc);
}, (e) => {
  console.log('Unable to save User')
})
