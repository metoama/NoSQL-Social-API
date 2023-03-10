const { User, Thoughts } = require('../models');

module.exports = {

    getAllThoughts(req,res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
        
    },

    getOneThought(req,res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) => 
        !thought
            ? res.status(404).json({ message: 'No thought with that ID'})
            : res.json(course)
        )
        .catch((err) => res.status(500).json(err));
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err))
    }

}