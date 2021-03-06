// Object modelling for department. This model will represent in the database and
// we will read the all the information according to this model.
// You can think that this is a representation of the database and we are using that
// for saving, reading, updating information from the database.

var mongoose  = require('mongoose');

var Homepage  = mongoose.Schema({
    cardName: {
        type: String
       
    },
    cardData:{
        type: String
    }
});

var Home = module.exports = mongoose.model('testimonials', Homepage,'testimonials');

// These are functions to get data from the database. You can even reach the information
// without calling this functions but I just want to show you how you can add some functions
// to your model file to get specific data.

module.exports.getAllcards = function(callback){
    Home.find(callback)
}
module.exports.getAllcardsbyid = function(callback){
    Home.find(callback)
}
// module.exports.getDepartmentById = function(id, callback){
//     Department.findById(id, callback);
// }