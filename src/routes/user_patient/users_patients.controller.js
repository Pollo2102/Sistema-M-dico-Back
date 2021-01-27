// Ex code

const express = require('express');
const router = express.Router();
const userPatientsService = require('./users_patients.service');

insert = (req, res, next) => {
    userPatientsService.registerUserPatient(req.body)
    .then(stat => {
        res.status(200);
        res.send('Ok');
    })
    .catch(next);
}

del = (req, res, next) => {
    userPatientsService.registerPatient(req.body)
    .then(stat => {
        res.status(200);
        res.send('Ok');
    })
    .catch(next);
}


// routes
router.post('/insert', insert);

router.delete('/delete', del);

module.exports = router;