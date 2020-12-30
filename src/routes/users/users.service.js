const express = require('express');
const client = require('../../DBInfo');
const User = require('../../models/users.js');

const router = express.Router();

// ====================================================
// Ex code

const config = require('../../config.json');
const jwt = require('jsonwebtoken');

authenticate = ({email, password}) => {

    return new Promise((resolve, reject) => {
        let user = new User();
        let found = false;

        client
        .query('SELECT * FROM usuario WHERE usuario.email = $1;', [email])
        .then(res => {
            user = new User(res.rows[0].id, res.rows[0].email, res.rows[0].password, res.rows[0].fullname);
            if (user.email == email && user.password == password) {
                found = true;
            }
            else {
                found = false;
            }

            if (!found) throw 'Username or password is incorrect';
            
            // create a jwt token that is valid for 7 days
            const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

            console.log('Query successful');

            resolve({...omitPassword(user), token });
        })
        .catch(e => {
            console.error(e.stack);
        });
    });
    
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

// Ex code

// ====================================================

// GET all the users
router.get('/api/users', (request, result) => {
    client
    .query('SELECT * FROM usuario;')
    .then(res => {
        let users = [];
        for (let i = 0; i < res.rows.length; i++) {
            let user = new User(res.rows[i].id, res.rows[i].email, "****", res.rows[i].fullname);
            users.push(user);
        }
        result.send(users);
        console.log('Query successful');
    })
    .catch(e => {
        console.error(e.stack);
        result.status(400);
        result.send(e.stack);
    })
});

// GET the specified user
router.get('/api/users/:email', (request, result) => {
    const getQuery = 'SELECT * FROM usuario WHERE usuario.email = $1';
    
    client
    .query(getQuery, [request.params.email])
    .then(res => {
        let user = {};
        if (res.rows.length == 1) {
            user = new User(res.rows[0].id, res.rows[0].email, "****", res.rows[0].nombre);
            result.send(user);
            console.log('Query successful');
        }
        else {
            result.status(204).send("Usuario no encontrado.");
        }
    })
    .catch(e => {
        console.log(e.stack);
        result.status(400);
        result.send(e.stack);
    })
});

// POST the specified user information
router.post('/api/users', (request, result) => {
    const postQuery = 'INSERT INTO usuario(id, email, password, nombre) VALUES($1, $2, $3, $4);';
    const { id, email, password, nombre } = request.body;
    
    client
    .query(postQuery, [id, email, password, nombre])
    .then(res => {
        result.status(200);
        result.send('Ok');
        console.log('Query successful');
    })
    .catch(e => {
        console.log(e.stack);
        result.status(400);
        result.send(e.stack);
    });
});

// PUT the specified user (update)
router.put('/api/users/:email', (request, result) => {
    const putQuery = 'UPDATE usuario SET password=$2 WHERE usuario.email = $1;';
    const { password } = request.body;
    const email = request.params.email;
    
    client
    .query(putQuery, [email, password])
    .then(res => {
        result.status(200);
        result.send('Ok');
        console.log('Query successful');
    })
    .catch(e => {
        console.log(e.stack);
        result(400);
        result.send(e.stack);
    });
});

// DELETE the specified user
router.delete('/api/users/:email', (request, result) => {
    const deleteQuery= 'DELETE FROM usuario WHERE usuario.email = $1;';
    const email = request.params.email;
    
    client.query(deleteQuery, [email])
    .then(res => {
        result.status(200);
        result.send('Ok');
        console.log('Query successful');
    })
    .catch(e => {
        console.log(e.stack);
        result.status(400);
        result.send(e.stack);
    });
});


// module.exports = router;
module.exports = {
    authenticate,
    getAll,
    router
};