// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  //deleteMany
  // db.collection('Todos').deleteMany({text: 'workout'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'finish mongodb course'}).then((result) => {
  //   console.log(result);
  // });

  //findOneandDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Divya'}).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
