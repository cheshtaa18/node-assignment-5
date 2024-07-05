const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
