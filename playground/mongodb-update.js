// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,function (err, db) {
    if(err){
        return console.log('unable to connect MongoDB')
    }
    console.log('Connected to MongoDB');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a391dbb371e142af899f234')
    // },{
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a38b9c6fa52c809b8745e82')
    },{
        $set:{
            name: 'phipham',
        },
        $inc:{
            age: 2
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result)
    })
    
    // db.close();
});
