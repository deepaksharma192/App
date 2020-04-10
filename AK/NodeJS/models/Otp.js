
const mongoose = require('mongoose')

OtpSchema = mongoose.Schema({
    number: {
        type: String
    },
    otp: {
        type: String
    },
    timestamp: {
        type: String
    }
})

var Otp = module.exports = mongoose.model('otps', OtpSchema,'otps');

module.exports.createOtp = function (otpData, callback) {
    let NewOtp = new Otp(otpData);
    NewOtp.save(callback);
}
module.exports.veryfyOtp = function (data, callback) {
    let {number, otp, timestamp}= data;
    let query = { number: number, otp: otp}
    Otp.find(query, callback);
}




