const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    usernmae: {
        type: String, 
        required: true,
        unique: true,
        trim: true 
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        match: //check mongoose documentation
    },
    thoughts: [
        { 
        type: Schema.Types.ObjectId, 
        ref: 'Thought'
         }
        ],
    friends: [
        { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
        }
        ]
});

module.exports = mongoose.model('User', UserSchema);