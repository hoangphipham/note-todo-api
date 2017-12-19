// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,function (err, db) {
    if(err){
        return console.log('unable to connect MongoDB')
    }
    console.log('Connected to MongoDB');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a38c133371e142af899f227')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //     console.log('Unable to fetch',err);
    // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch',err);
    // });

    db.collection('Users').find(
        {
            name: 'Phi'
        }
    ).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 5));
    },(err)=>{
        console.log('Unable to fetch',err);
    });



    // db.close();
});
