// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b98e9815791904ebff91cfe')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //  console.log(result);   
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b98c674ed8d360c10d4cab4')
  }, {
    $set: {
      name: 'Divya'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});