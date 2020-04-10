const mongoose = require('mongoose')


AnnouncementSchema = mongoose.Schema({
    ctype: {
        type: String
    },
    announcement: {
        type: String
    }
})

var Announcement = module.exports = mongoose.model('announcement', AnnouncementSchema,'announcement');
module.exports.getAnnouncementById = function (ctype, callback) {
    let query = {$or:[{ctype:ctype},{ctype:"all"}]}
    Announcement.find(query, callback)
}





