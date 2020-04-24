
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        index: true
    },
    number: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    role: {
        type: String
    },
    status: {
        type: String
    },
    zip: {
        type: String
    },
    schoolname: {
        type: String
    },
    schooladdress: {
        type: String
    },
    AddressFirst: {
        type: String
    },
    AddressSecond: {
        type: String
    },
    Hobby: {
        type: String
    },
    text: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    class: {
        type: String
    },
    gender: {
        type: String
    },
    mailidverified: {
      type: Boolean,
      default: false
    }
});

var User = module.exports = mongoose.model('users', userSchema);

module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
module.exports.updateUserFirstTimeById = function (userId, newCart, callback) {
    let query = { _id: userId }
    User.findOneAndUpdate(
        query,
        {
            $set: {
                ...newCart,
                role: "user",
                status: "review"
            }
        },
        callback
    )
}

module.exports.updateUserById = function (userId, newCart, callback) {
    let query = { _id: userId }
    User.findOneAndUpdate(
        query,
        {
            $set: {
                ...newCart,
                status: "active"
            }
        },
        callback
    )
}

module.exports.getUserByNumber = function (number, callback) {
    var query = { number: number };
    User.findOne(query, callback);
}

module.exports.getUserByEmail = function (email, callback) {
    var query = { email: email };
    User.findOne(query, callback);
}
module.exports.confirmUserEmailAndById = function (uid, email, callback) {
    var query = {_id:uid, email: email };
    User.findOneAndUpdate(
        query,
        {
            $set: {
                mailidverified: true
            }
        },
        callback
    )
}

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}
module.exports.comparePassword = function (givenPassword, hash, callback) {
    bcrypt.compare(givenPassword, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports.getAllUsers = function (callback) {
    User.find(callback)
}