const express = require('express');
const client = require('../../DBInfo');
const Patient = require('../../models/user_patient.js');

const router = express.Router();

// ====================================================
// Ex code

const config = require('../../config.json');
const jwt = require('jsonwebtoken');

registerUserPatient = (regInfo) => {

    let postQuery = `INSERT INTO usuario_paciente (usuario_id, paciente_id) VALUES ($1, $2);`;

      
      return new Promise((resolve, reject) => {
        
        let newReg = [regInfo.usuario_id, regInfo.paciente_id];

        console.log(newReg);
        
        client
        .query(postQuery, newReg)
        .then(res => {
            console.log('Query successful.');
            resolve("OK!");
        })
        .catch(e => {
            console.log(e.stack);
        });
    });
}

deleteUserPatient = (regInfo) => {

    let postQuery = `DELETE FROM usuario_paciente WHERE (paciente_id = $1 AND usuario_id = $2);
    `;

      
      return new Promise((resolve, reject) => {
        
        let newReg = [regInfo.usuario_id, regInfo.paciente_id];

        console.log(newReg);
        
        client
        .query(postQuery, newReg)
        .then(res => {
            console.log('Query successful.');
            resolve("OK!");
        })
        .catch(e => {
            console.log(e.stack);
        });
    });
}

module.exports = {
    registerUserPatient,
    deleteUserPatient
};