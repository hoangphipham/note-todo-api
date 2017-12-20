const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = '5a3a1c2f68b88a5c09728f290';

var id = '5a39dbda960363182975c937'

// if(!ObjectID.isValid(id)){
//     console.log('ID no valid')
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('todo', todo)
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log('todo by id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user)=>{
    if(!user){
        return console.log('id not found');
    }
    console.log('user by id', user);
}).catch((e) => console.log(e));
