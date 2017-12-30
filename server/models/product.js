const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    groupId: [{
        type: Schema.Types.ObjectId,
        ref:'group'
    }],
    userId: [{
        type: Schema.Types.ObjectId,
        ref:'user'
    }]
})
const Product = mongoose.model('product',ProductSchema);
module.exports = {Product}