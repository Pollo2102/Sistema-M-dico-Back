// Ex code

const express = require('express');
const router = express.Router();
const patientsService = require('./patients.service');

insert = (req, res, next) => {
    patientsService.registerPatient(req.body)
    .then(stat => {
        res.status(200);
        res.send('Ok');
    })
    .catch(next);
}

get = (req, res, next) => {
    patientsService.getPatient(req.params.id)
    .then(user => {
        res.json(user.rows[0]);
        res.status(200);
    })
    .catch(next);
}


// routes
router.post('/insert', insert);
router.get('/get/:id', get);

module.exports = router;