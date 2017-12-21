const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result)
// })

// Todo.findOneAndRemove
Todo.findOneAndRemove('5a3b22fe150b8b1b384f2906').then((todo)=>{
    console.log(todo);
});

//Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5a3b22fe150b8b1b384f2906').then((todo)=>{
//     console.log(todo);
// });