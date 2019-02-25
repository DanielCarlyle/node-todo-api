//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
  if (err) {
    return console.log('unable to connect to the MongoDB server');
  }
  console.log("Connected to MongoDB server");

//delete many - target many documents
db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
  console.log(result);
});

//delete one document
db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  console.log(result);
});


//find one and delete
db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  console.log(result);
});

//delete Rick Johnsons
//db.collection('Users').deleteMany({name: 'Rick Johnson'});


//find one and delete
db.collection('Users').findOneAndDelete({_id: new ObjectID("5c6d798afc060a19d8c2bdcf")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});

  //db.close();
});
