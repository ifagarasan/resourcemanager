const Tech = require('../models/tech.model');

exports.index = function (req, res) {
    Tech.find({}).then(techItems => {
        res.render('../views/pages/index', {techItems: techItems});
    });
};