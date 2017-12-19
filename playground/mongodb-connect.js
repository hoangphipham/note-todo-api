// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,function (err, db) {
    if(err){
        return console.log('unable to connect MongoDB')
    }
    console.log('Connected to MongoDB');


//     db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
  
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
    

    // db.collection('Users').insertOne({
    //     name: 'Phi',
    //     age: 25,
    //     location: 'Hcm'
    // }, function(err, result){
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});
