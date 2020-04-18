
const mongoose = require('mongoose')

BookmarkSchema = mongoose.Schema({
    uid: {
        type: String
    },
    cid: {
        type: String
    },
    currentTopic: {
        type: String
    },
    currentVideo: {
        type: String
    },
    videoTime: {
        type: Object
    },
    currentTab: {
        type: String
    },
    completion: {
        type: String
    }

})

var Bookmarking = module.exports = mongoose.model('bookmarkings', BookmarkSchema)

module.exports.getBookmarkById = function (uid, cid, callback) {
    let query = { uid: uid, cid: cid }
    Bookmarking.find(query, callback)
}
module.exports.updateBookmarkById = function (data, callback) {
    let query = { uid: data.uid, cid: data.cid }
    Bookmarking.find(query, function (err, c) {
        if (err) throw err;
        if (c.length > 0) {
            Bookmarking.findOneAndReplace(
                query,
                {
                    $set: {
                        currentTopic: data.currentTopic,
                        currentVideo: data.currentVideo,
                        videoTime: data.videoTime,
                        currentTab: data.currentTab,
                        completion: data.completion
                    }
                },
                callback
            )
        } else {
            console.log(data)
            var BookmarkData = new Bookmarking(data);
            BookmarkData.save(callback)
        }
    })
}




