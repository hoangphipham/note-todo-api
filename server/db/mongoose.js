var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var MONGODB_URI = 'mongodb://phipham:Hoang05phi12@ds157653.mlab.com:57653/node-todo-api'

mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose};


