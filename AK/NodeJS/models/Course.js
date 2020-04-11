
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var async = require('async');
var lo = require('lodash');
var classSchema = mongoose.Schema({
    className: {
        type: String
    },
    price: {
        type: String
    },
    currency: {
        type: String
    },
    status: {
        type: String
    }
});


var subjectsSchema = mongoose.Schema({
    class_id: {
        type: String
    },
    subject_name: {
        type: String
    },
    status: {
        type: String
    }
});


var courseSchema = mongoose.Schema({
    title: {
        type: String,
        index: true
    },
    duration: {
        type: String
    },
    status: {
        type: String
    },
    description: {
        type: String
    },
    view: {
        type: String
    },
    topic_id: {
        type: String
    },
    sub_topic: {
        type: String
    },
    thum:{
        type: String
    }
});

var topicsSchema = mongoose.Schema({
    title: {
        type: String,
        index: true
    },
    course_id: {
        type: String
    },
    status: {
        type: String
    },
    description: {
        type: String
    },
    sub_topic: {
        type: String
    }
});

var videosSchema = mongoose.Schema({
    title: {
        type: String,
        index: true
    },
    topic_id: {
        type: String
    },
    status: {
        type: String
    },
    description: {
        type: String
    },
    src: {
        type: String
    },
    img: {
        type: String
    },
    sub_topic: {
        type: String
    }
});

var Classes = module.exports = mongoose.model('classes', classSchema, 'classes');
var Subjects = module.exports = mongoose.model('subjects', subjectsSchema, 'subjects');
var Course = module.exports = mongoose.model('courses', courseSchema);
var Topic = mongoose.model('topics', topicsSchema);
var Video = mongoose.model('videos', videosSchema);

module.exports.getAllClasses = function (callback) {
    Classes.find(callback)
}
module.exports.getAllCourse = function (classes, callback) {
    var queryClass = { _id: classes };
    async.auto({
        get_classes: function (callback1) {
            Classes.findOne(queryClass, (err, classes_) => {
                if (err) return next(err);
                callback1(null, classes_);
            })
        },
        get_subjects: ["get_classes", function (results, callback1) {
            let query = { class_id: results.get_classes._id }
            Subjects.find(query, (err, subject_) => {
                if (err) return next(err);
                callback1(null, subject_);
            })
        }],
        get_course: ["get_subjects", function (results, callback1) {
            let { get_subjects } = results;
            let dataQ = get_subjects.map(v => {
                return { subject_id: v.id };
            })
            let query = { $or: dataQ }
            Course.find(query, (err, course_) => {
                if (err) return next(err);
                callback1(null, course_);
            })
        }]
        // ,
        // get_topics: ["get_course", function (results, callback1) {
        //     let { get_course } = results;
        //     let dataQ = get_course.map(v => {
        //         return { course_id: v.id };
        //     })
        //     let query = { $or: dataQ }
        //     Topic.find(query, (err, topic_) => {
        //         if (err) return next(err);
        //         callback1(null, topic_);
        //     })
        // }],
        // get_vodeo: ["get_topics", function (results, callback1) {
        //     let { get_topics } = results;
        //     let dataQ = get_topics.map(v => {
        //         return { topic_id: v.id };
        //     })
        //     let query = { $or: dataQ }
        //     Video.find(query, (err, video_) => {
        //         if (err) return next(err);
        //         callback1(null, video_);
        //     })
        // }]
    }, (err, results) => {
        callback(err, results)
    })

}
module.exports.getCourseById = function (id, callback) {
    var query = { _id: id };
    let course = {};
    async.auto({
        get_course: function (callback1) {
            Course.findOne(query, (err, course_) => {
                if (err) return next(err);
                callback1(null, course_);
            })
        },
        get_topics: ["get_course", function (results, callback1) {
            getTopics(results.get_course._id, (topic) => {
                callback1(null, topic);
            })
        }],
        get_vodeo: ["get_topics", function (results, callback1) {
            let get_topics_ = (results.get_topics)
            let temp1 = [];
            let i = 0;
            let dert = async () => {
                let elem = get_topics_[i];
                if (elem) {
                    let queryVideov = { topic_id: elem._id };
                    await Video.find(queryVideov, (err, video__) => {
                        if (err) return next(err);
                        temp1.push(JSON.stringify((video__)));
                        if (get_topics_.length == (i + 1)) {
                            callback1(null, temp1)
                        } else {
                            i++;
                            dert();
                        }
                    });
                }
            }
            dert();
        }]
    }, function (err, results) {
        Object.assign(course, results.get_course._doc);
        course['topics'] = (results.get_topics);
        course['topics'].map((vv) => {
            vv['sub_topics'] = [];
            return vv;
        })
        results['get_vodeo'].forEach((v, i) => {
            Object.assign(course['topics'][i]['_doc'], { sub_topics: eval(v) });
        })
        callback(null, course)
    });
}

const getTopics = (id, cb) => {
    var queryTopic = { course_id: id };
    Topic.find(queryTopic, (err, topic_) => {
        if (err) return next(err);
        cb(topic_);
    })
}

// module.exports.createUser = function (newUser, callback) {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(newUser.password, salt, function (err, hash) {
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     });
// }
// module.exports.updateCartByUserId = function (userId, newCart, callback) {
//     let query = { _id: userId }
//     User.findOneAndReplace(
//         query,
//         {
//             $set: {
//                 ...newCart,
//                 role: "user",
//                 status: "review"
//             }
//         },
//         callback
//     )
// }
// module.exports.getUserByNumber = function (number, callback) {
//     var query = { number: number };
//     User.findOne(query, callback);
// }

// module.exports.getUserByEmail = function (email, callback) {
//     var query = { email: email };
//     User.findOne(query, callback);
// }


// module.exports.getUserById = function (id, callback) {
//     User.findById(id, callback);
// }
// module.exports.comparePassword = function (givenPassword, hash, callback) {
//     bcrypt.compare(givenPassword, hash, function (err, isMatch) {
//         if (err) throw err;
//         callback(null, isMatch);
//     });
// }

// module.exports.getAllUsers = function (callback) {
//     User.find(callback)
// }