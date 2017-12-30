var env = process.env.NODE_ENV || 'development';

console.log('env *******',env);

const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser')
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose.js');
var{Group} = require('./models/group');
var{History} = require('./models/history');
var{Product} = require('./models/product');
var{User} = require('./models/user');
var{Todo} = require('./models/todo');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
      text: req.body.text
    });
  
    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });



  app.post('/users', (req, res) => {
    var user = new User({
      email: req.body.email
    });
  
    user.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });


app.get('/users', (req, res) => {
    user.find().then((users) => {
      res.send({users});
    }, (e) => {
      res.status(400).send(e);
    });
  });


// //GET /todos/

// app.get('/todos/:id',(req,res)=>{
//     var id = req.params.id
//     //valid id
//     if(!ObjectID.isValid(id)){
//         return res.status(404).send();
//     }
//     //findbyId
//     Todo.findById(id).then((todo)=>{
//         if(!todo){
//             return res.status(404).send();
//         }
//         res.send({todo});
//     }).catch((e)=>{
//         return res.status(404).send();
//     })
// })

// app.delete('/todos/:id', (req,res)=>{
//     var id = req.params.id
//     if(!ObjectID.isValid(id)){
//       return res.status(404).send();
//     }
//     Todo.findByIdAndRemove(id).then((todo)=>{
//       if(!todo){
//         return res.status(404).send();
//       }
//       res.send({todo});
//     }).catch((e)=>{
//       return res.status(400).send();
//   });
// });

// app.patch('/todos/:id', (req,res)=>{
//     var id = req.params.id;
//     var body = _.pick(req.body,['text','completed']);

//     if(!ObjectID.isValid(id)){
//       return res.status(404).send();
//     }

//     if(_.isBoolean(body.completed) && body.completed){
//       body.completedAt = new Date().getTime();
//     }else{
//       body.completed = false;
//       body.completedAt = null;
//     }

//     Todo.findByIdAndUpdate(id,{$set: body},{new:true}).then((todo)=>{
//       if(!todo){
//         return res.status(404).send()
//       }
//       res.send({todo});
//     }).catch((e)=>{
//       res.status(400).send();
//     })
// })


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
  

module.exports = {app};

