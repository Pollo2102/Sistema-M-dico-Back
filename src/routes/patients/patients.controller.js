// Ex code

const express = require('express');
const router = express.Router();
const patientsService = require('./patients.service');

insert = (req, res, next) => {
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    patientsService.registerPatient(req.body)
    .then(stat => {
        res.status(200);
        res.send('Ok');
    })
    .catch(next);
}


// routes
router.post('/insert', insert);

module.exports = router;