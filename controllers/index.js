const api = require('../utils/api');

exports.homepage = (req, res) => {
    api.waffleHouseDB()
        .then(body => {
            res.status(200).json(body);
        })
        .catch(err => {
            res.status(400).send({error: err});
        });
};