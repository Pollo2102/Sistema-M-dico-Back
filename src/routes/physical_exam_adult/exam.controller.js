// Ex code

const express = require('express');
const router = express.Router();
const examService = require('./exam.service');

insert = (req, res, next) => {
    examService.registerExam(req.body)
    .then(stat => {
        res.status(200);
        res.send('Ok');
    })
    .catch(next);
}

getExams = (req, res, next) => {
    examService.getExams(req.params.usuario_id, req.params.paciente_id)
    .then(user => {
        console.log(user.rows);
        res.json(user.rows);
        res.status(200);
    })
    .catch(next);
}

getExam = (req, res, next) => {
    examService.getExam(req.params.paciente_id, req.params.fecha_examen)
    .then(user => {
        res.json(user.rows[0]);
        res.status(200);
    })
    .catch(next);
}



// routes
router.post('/insert', insert);
router.get('/getAll/:usuario_id-:paciente_id', getExams);
router.get('/get/:paciente_id-:fecha_examen', getExam);

module.exports = router;