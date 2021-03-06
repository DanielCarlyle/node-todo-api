var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User}= require('./models/user');

var app = express();


//using middleware
//Body Parser takes your JSON and converts into an object
app.use(bodyParser.json());

//create new Todos in this post route
app.post('/todos', (req, res) => {
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('started on port 3000');
});

module.exports = {app};
