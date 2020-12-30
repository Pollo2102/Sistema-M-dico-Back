// Ex code


// CHANGE ALL THE CODE BELOW!!!!
const express = require('express');
const router = express.Router();
const userService = require('./users.service');

authenticate = (req, res, next) => {
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
}

// routes
router.post('/authenticate', authenticate);
router.get('/', getAll);

module.exports = router;

// Ex code