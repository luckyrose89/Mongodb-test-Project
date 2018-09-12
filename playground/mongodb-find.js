// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
   
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos total: ${count}`);
  // }, (err) => {
  //   console.log("Unable to fetch todos!!");
  // });

  db.collection('Users').find({name: 'Divya'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch Users right now!!");
  });

  // db.close();
});
