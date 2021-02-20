
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

const app = express();
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

app.use('/users', require('./routes/users/users.controller'));

app.use('/patients', require('./routes/patients/patients.controller'));

app.use('/user-patients', require('./routes/user_patient/users_patients.controller'));

app.use('/exam', require('./routes/physical_exam_adult/exam.controller'));

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Sistema de Información de Salud API.\n');
});

app.set('port', process.env.PORT || 5714);
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
})