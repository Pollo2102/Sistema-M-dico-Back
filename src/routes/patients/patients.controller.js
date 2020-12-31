// Ex code


// CHANGE ALL THE CODE BELOW!!!!
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

/* authenticate = (req, res, next) => {
    userService.authenticate(req.body)
    .then(user => {
        res.json(user);  
    })
    .catch(next);
}

getAll = (req, res, next) => {
    userService.getAll()
    .then(users => res.json(users))
    .catch(next);
} */

// routes
router.post('/insert', insert);

module.exports = router;