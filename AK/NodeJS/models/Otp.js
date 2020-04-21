
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

var Otp = module.exports = mongoose.model('otps', OtpSchema, 'otps');

module.exports.createOtp = function (otpData, callback) {
    let query = { number: otpData.number}
    Otp.find(query, function (err, c) {
        if (err) throw err;
        if (c.length > 0) {
            Otp.findOneAndReplace(
                query,
                {
                    $set: {
                        otp: otpData.otp.toString(),
                        timestamp: otpData.timestamp
                    }
                },
                callback
            )
        } else {
            let NewOtp = new Otp(otpData);
            NewOtp.save(callback);
        }
    })
}
module.exports.veryfyOtp = function (data, callback) {
    let { number, otp, timestamp } = data;
    let query = { number: number, otp: otp.toString() }
    Otp.find(query, callback);
}




