
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
})
const User = mongoose.model('user',UserSchema);


// var User = mongoose.model('user', {
//     email: {
//       type: String,
//       required: true,
//     },
//   });

module.exports = User;