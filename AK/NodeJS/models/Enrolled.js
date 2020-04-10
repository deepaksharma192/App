
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var enrolledSchema = mongoose.Schema({
    user_id: {
        type: String
    },
    payment: {
        type: String
    },
    payment_id: {
        type: String
    },
    status: {
        type: String
    }
});

var Enrolled = module.exports = mongoose.model('enrolled', enrolledSchema, 'enrolled');

module.exports.enrolledUser = function (newData, callback) {
    let enrolled = new Enrolled(newData);
    enrolled.save(callback);
}
module.exports.getEnrolledUserById = function (userId, callback) {
    let query = { user_id: userId, status: "active" }
    Enrolled.find(query, callback);
}