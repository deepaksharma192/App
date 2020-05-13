let {
    Classes,
    Subjects,
    Course,
    Topic,
    Video,
    getAllClasses,
    getAllCourse,
    getCourseById
  } = require('./Course');

module.exports.getAllClass = function (callback) {
    Classes.find(callback)
}
module.exports.addClass = function (data, callback) {
    let query = {className:data.className}
    Classes.find(query, function (err, c) {
        if (err) callback(err,c);
        if (c.length > 0) {
            callback(err,c)
        } else {
            let newData = new Classes(data)
            newData.save(callback)
        }
    })
}
module.exports.getAllSubject = function (data,callback) {
    let q = {class_id:data.class_id};
    Subjects.find(q, callback)
}
module.exports.addSubject = function (data, callback) {
    let query = {subject_name:data.subject_name,class_id:data.class_id}
    Subjects.find(query, function (err, c) {
        if (err) callback(err,c);
        if (c.length > 0) {
            callback(err,c)
        } else {
            let newData = new Subjects(data)
            newData.save(callback)
        }
    })
}
module.exports.getAllChapter = function (data,callback) {
    let q = {subject_id:data.subject_id};
    Course.find(q, callback)
}
module.exports.addChapter = function (data, callback) {
    let query = {title:data.title,subject_id:data.subject_id}
    Course.find(query, function (err, c) {
        if (err) callback(err,c);
        console.log(c)
        if (c.length > 0) {
            callback(err,c)
        } else {
            let newData = new Course(data);
            console.log(data)
            newData.save(callback)
        }
    })
}
module.exports.getAllTopic = function (data,callback) {
    let q = {course_id:data.course_id};
    Topic.find(q, callback)
}
module.exports.addTopic = function (data, callback) {
    let query = {title:data.title,course_id:data.course_id}
    Topic.find(query, function (err, c) {
        if (err) callback(err,c);
        if (c.length > 0) {
            callback(err,c)
        } else {
            let newData = new Topic(data)
            newData.save(callback)
        }
    })
}
module.exports.getAllVideo= function (data,callback) {
    let q = {topic_id:data.topic_id};
    Video.find(q, callback)
}
module.exports.addVideo = function (data, callback) {
    let query = {title:data.title,topic_id:data.topic_id}
    Video.find(query, function (err, c) {
        if (err) callback(err,c);
        if (c.length > 0) {
            callback(err,c)
        } else {
            let newData = new Video(data)
            newData.save(callback)
        }
    })
}