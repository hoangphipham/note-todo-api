// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,function (err, db) {
    if(err){
        return console.log('unable to connect MongoDB')
    }
    console.log('Connected to MongoDB');
    
    //deletemany
    // db.collection('Todos').deleteMany({text:'lunch'}).then((result)=>{
    //     console.log(result)
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'hello1'}).then((result)=>{
    //     console.log(result)
    // });

    //findOnde and delete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result)=>{
    //     console.log(result)
    // });


    db.collection('Users').findOneAndDelete({
        _id : new ObjectID('5a38bd4110629b33e85ec38c')
    }).then((result)=>{
        console.log(result)
    })

    // db.close();
});
