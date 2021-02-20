const express = require('express');
const client = require('../../DBInfo');
const Exam = require('../../models/physical_exam_adult.js');

const router = express.Router();

// ====================================================
// Ex code

const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const { user } = require('../../DBInfo');

registerExam = (examInfo) => {

    let postQuery = `INSERT INTO examen_fisico_adulto (paciente_id, fecha_examen, peso, talla, perimetro_cefalico, temperatura, presion_arterial, frecuencia_cardiaca, frecuencia_respiratoria, pulso, saturacion_oxigeno, cabeza, ojos, oidos, nariz, boca, cuello, torax, abdomen, genitales, extremidades, tacto_rectal_vaginal, piel_y_faneras, examen_neurologico, diagnostico_etario, diagnostico_nutricional, diagnostico_inmunologico, diagnostico_socioeconomico, diagnostico_patologico) VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11,
        $12,
        $13,
        $14,
        $15,
        $16,
        $17,
        $18,
        $19,
        $20,
        $21,
        $22,
        $23,
        $24,
        $25,
        $26,
        $27,
        $28,
        $29
      );`;

      
      return new Promise((resolve, reject) => {
          
        // console.log(`Exam Info: ${examInfo.paciente_id}`);

        let newExam = [examInfo.paciente_id, examInfo.fecha_examen, examInfo.peso, examInfo.talla, examInfo.perimetro_cefalico, examInfo.temperatura, examInfo.presion_arterial, examInfo.frecuencia_cardiaca, examInfo.frecuencia_respiratoria, examInfo.pulso, examInfo.saturacion_oxigeno, examInfo.cabeza, examInfo.ojos, examInfo.oidos, examInfo.nariz, examInfo.boca, examInfo.cuello, examInfo.torax, examInfo.abdomen, examInfo.genitales, examInfo.extremidades, examInfo.tacto_rectal_vaginal, examInfo.piel_y_faneras, examInfo.examen_neurologico, examInfo.diagnostico_etario, examInfo.diagnostico_nutricional, examInfo.diagnostico_inmunologico, examInfo.diagnostico_socioeconomico, examInfo.diagnostico_patologico];

        // console.log(newExam);
        
        client
        .query(postQuery, newExam)
        .then(res => {
            console.log('Query successful.');
            resolve("OK!");
        })
        .catch(e => {
            console.log(e.stack);
        });
    });
};

getExams = (userID, patientID) => {

    let postQuery = `DO $do$ BEGIN IF EXISTS(SELECT from usuario_paciente WHERE usuario_id = $1 AND paciente_id = $2) THEN SELECT distinct on (fecha_examen) exam.* FROM examen_fisico_adulto exam WHERE paciente_id = $2; END IF; END $do$;`;

    let postQuery2 = `SELECT exam.fecha_examen FROM examen_fisico_adulto exam WHERE EXISTS (SELECT * FROM usuario_paciente WHERE paciente_id = $2 AND usuario_id = $1);`;
      
    return new Promise((resolve, reject) => {
        
        client
        .query(postQuery2, [userID, patientID])
        .then(res => {
            console.log('Query successful.');
            resolve(res);
        })
        .catch(e => {
            console.log(e.stack);
        });
    });
}

getExam = (patientID, examDate) => {
    let postQuery = `SELECT * FROM examen_fisico_adulto WHERE (paciente_id = $1 AND fecha_examen = $2);`;
      
    return new Promise((resolve, reject) => {
        
        client
        .query(postQuery, [patientID, new Date(examDate)])
        .then(res => {
            console.log('Query successful.');
            resolve(res);
        })
        .catch(e => {
            console.log(e.stack);
        });
    });
}


module.exports = {
    registerExam,
    getExam,
    getExams,
};