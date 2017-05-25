var consts = require('./consts'),
    mongoose = require('mongoose');
mongoose.Promise = Promise
mongoose.connect(consts.MLAB_KEY);

var conn = mongoose.connection;

console.log("loaded monngose");

conn.on('error',
    (err) => {
        console.log(`connection error: ${err}`);
    });

conn.once('open',
    () => {
        console.log(`connected`);
        //mongoose.disconnect();
    });