const {connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/socialAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//Export Connection
module.exports = connection; 