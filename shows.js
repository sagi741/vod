var mongoose = require('mongoose');

var schema = mongoose.Schema,
    showsSchema = new schema({
        year: Number,
        language: [String],
        showName: String,
        genre: String
    }),
    Show = mongoose.model('Shows', showsSchema);

module.exports = Show;