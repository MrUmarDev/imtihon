const { model, Schema } = require("mongoose")

const schema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    superAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Admins = model('Admins', schema);

module.exports = Admins;