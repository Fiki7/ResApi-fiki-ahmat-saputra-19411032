const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    guid_id: { type: String},
    email: {type: String, require: true,unique: true,lowercase: true, },
    nama: {type: String},
    password: {type: String},
    date: {type: Date, default: Date.now}

})
module.exports = mongoose.model('user', UserSchema)