//const MongoClient = require('mongodb').MongoClient;
//creates a variable called MongoClient - it is identical to the code above*****
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//var user = {name: 'andrew', age: 25};
//Object Destructuring lets you pull out proerites from Objects creating Variables
//var {name} = user;
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
  if(err) {
    return console.log('unable to connect to the MongoDB server');
  }
  console.log("Connected successfully to server");


  //creates new Collection for todos
    db.collection('Todos').insertOne({
      text: 'Something to do',
      completed: false
    }, (err, result) => {
      if(err) {
        return console.log('unable to connect to insert todo', err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2))
    });

//insert new doc into Users (name, age , location)
db.collection('Users').insertOne({
  name: 'Rick Johnson',
  age: '47',
  location: 'Toronto'
}, (err, result) => {
  if(err) {
    return console.log('unable to connect to insert user', err);
  }
  console.log(result.ops[0]._id.getTimestamp());
});


  db.close();
});
