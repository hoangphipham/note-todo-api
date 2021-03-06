const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: String,
    userId: [{
        type: Schema.Types.ObjectId,
        ref:'user'
    }]
})
const Group = mongoose.model('group',GroupSchema);
module.exports = Group;