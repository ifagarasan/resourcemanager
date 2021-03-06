const Tech = require('../models/tech.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.all = function (req, res) {
    Tech.find({}).then(techItems => {
        res.send(techItems);
    });
};

exports.create = function (req, res) {
    let tech = new Tech({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    });
    
    tech.save().then(item => {
        res.send("item " + item + " saved to database");
    }).catch(err => {
        res.status(400).send("unable to save object. error is " + err)
    });
};