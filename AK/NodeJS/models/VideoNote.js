const mongoose = require('mongoose')
VideoNoteSchema = mongoose.Schema({
    cid: {
        type: String
    },
    uid: {
        type: String
    },
    note: {
        type: String
    },
    time: {
        type: String
    },
    v_tid: {
        type: String
    }
})

var VideoNote = module.exports = mongoose.model('Video_Note', VideoNoteSchema, 'Video_Note');

module.exports.createVideoNote = function (noteData, callback) {
    var VideoNoteData = new VideoNote(noteData);
    VideoNoteData.save(callback)
}
module.exports.getVideoNoteById = function (cid, uid, callback) {
    let query = { cid: cid, uid: uid }
    VideoNote.find(query, callback)
}






