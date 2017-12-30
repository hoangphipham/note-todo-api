const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistotySchema = new Schema({
    year: Number,
    month: Number,
    address: String,
    groupId: [{
        type: Schema.Types.ObjectId,
        ref:'group'
    }],
    userId: [{
        type: Schema.Types.ObjectId,
        ref:'user'
    }],
    ProductId: [{
        type: Schema.Types.ObjectId,
        ref:'product'
    }]
})
const History = mongoose.model('history',HistotySchema);
module.exports = History;