var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
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

// var newTodo = new Todo({
//     text: 'Code 2 hours'
// });

// newTodo.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log('Unable to save entry to db');
// });

// var myTodo = new Todo({
//     text: 'complete this project '
// });

// myTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save entry to db');
// });

var User = mongoose.model('user', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var divya = new User({
    email: 'divyamathur@abc.com'
});

divya.save().then((doc) =>{
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Could not add to database!!');
});