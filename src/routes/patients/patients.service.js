const express = require('express');
const client = require('../../DBInfo');
const Patient = require('../../models/patients.js');

const router = express.Router();

// ====================================================
// Ex code

const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const { user } = require('../../DBInfo');

registerPatient = (userInfo) => {

    let postQuery = `INSERT INTO paciente (ID,nombre_completo,fecha_nacimiento,lugar_nacimiento,edad,nombre_madre,nombre_padre,sexo,procedencia,estado_civil,religion,sintoma_principal,historia_enfermedad_actual,funciones_organicas_generales,revision_por_organos_aparatos_sistemas,antecedentes_prenatales_postnatales,datos_del_nacimiento,antecedentes_personales_patologicos,antecedentes_personales_no_patologicos,vacunacion,escolaridad,medio_ambiente) VALUES (
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
        $22
      );`;

      
      return new Promise((resolve, reject) => {
        
        let newUser = [userInfo.id, userInfo.nombre_completo, userInfo.fecha_nacimiento, userInfo.lugar_nacimiento, userInfo.edad, userInfo.nombre_madre, userInfo.nombre_padre, userInfo.sexo, userInfo.procedencia, userInfo.estado_civil, userInfo.religion, userInfo.sintoma_principal, userInfo.historia_enfermedad_actual, userInfo.funciones_organicas_generales, userInfo.revision_por_organos_aparatos_sistemas, userInfo.antecedentes_personales_patologicos, userInfo.datos_del_nacimiento, userInfo.antecedentes_personales_patologicos, userInfo.antecedentes_personales_no_patologicos, userInfo.vacunacion, userInfo.escolaridad, userInfo.medio_ambiente];

        console.log(newUser);
        
        client
        .query(postQuery, newUser)
        .then(res => {
            console.log('Query successful.');
            resolve("OK!");
        })
        .catch(e => {
            console.log(e.stack);
        });
    });
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

module.exports = {
    registerPatient,
    getAll,
};