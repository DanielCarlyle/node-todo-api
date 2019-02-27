//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
  if (err) {
    return console.log('unable to connect to the MongoDB server');
  }
  console.log("Connected to MongoDB server");

//find one and update
//db.collection('Todos').findOneAndUpdate({
  //_id: new ObjectID('5c75a62c88f2c20804db14c8')
//}, {
  //$set: {
    //completed: true
    //}
  //}, {
    //returnOriginal: false
  //}).then((result) => {
    //console.log(result);
//});

//find one and update
db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5c76a2da88f2c20804db182d')
}, {
  $set: {
    name: "Dean"
  },
  $inc: {
    age: 1
  }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });





  //db.close();
});
