//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
  if (err) {
    return console.log('unable to connect to the MongoDB server');
  }
  console.log("Connected to MongoDB server");


  //db.collection('Todos').find({
  //_id: new ObjectID('5c6dc4d0adf2c11484cc9ec9')
  //}).toArray().then((docs) => {
  //console.log('Todos');
  //console.log(JSON.stringify(docs, undefined, 2))
  //}, (err) => {
  //console.log('Unable to fetch todos', err);
  //});


//implementing count
  //db.collection('Todos').find().count().then((count) => {
    //console.log(`Todos count: ${count}`);
  //}, (err) => {
    //console.log('Unable to fetch todos', err);
  //});

  db.collection('Users').find({name: 'Johnson'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });


  //db.close();
});
