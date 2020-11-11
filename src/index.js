
const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 5714);

app.use(express.json());
app.use(cors());

// app.use(require('./routes/users'));

app.get('/', (req, res) => {
    res.send('Sistema de Información de Salud API.\n');
});

app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
})